const express = require("express")
const router = express.Router()
const Respose = require("../models/message-response")
const Message = require("../models/message")
const verifyToken = require("../middlewares/verifyToken")
const handleError = require("../middlewares/error")

router.post("/reply", verifyToken, async function (req, res){
    try{
        let { message_id } = req.body

        let message = await Message.findById(message_id)

        if(!message){
            return handleError(res, 404, "No message ")
        }

        let response = new Respose(req.body)
        await response.save()

        message.response_id.push(response._id)
        await message.save()

        return res.status(200).send({
            Status:"Success",
            message: "replied",
            data: message        
        })
    }catch(err){
        return handleError(res, 500, "Internal server error ")
    }
})


router.get("/replies", verifyToken, async function (req, res){
    try{
        let response = await Response.find().populate("message_id")
        if(!response){
            return handleError(res, 403, "No messaage")
        }

        return res.status(200).send({
            Status: "Success",
            length: response.length,
            data: response
        })
    }catch(err){
        console.log(err)

        return handleError(res, 500, "Internal server error")
    }
})

module.exports = router 