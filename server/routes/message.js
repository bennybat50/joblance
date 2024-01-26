const express = require("express")
const router = express.Router()
const User = require("../models/user")
const Company = require("../models/company")
const Message = require("../models/message")
const handleError = require("../middlewares/error")
const verifyToken = require("../middlewares/verifyToken")


router.post("/message", verifyToken, async function (req, res){
    
    try{
        let { sender_id, receiver_id, text } = req.body 
    
        
        let message = new Message(req.body)
        await message.save()
        res.status(200).send({
            message: "message sent",
            data: message
        });

    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})

router.get("/messages", verifyToken, async function (req, res){
    try{
        let message = await Message.find().populate("user_id company_id")
        if(!message){
            return handleError(res, 403, "No messaage")
        }

        return res.status(200).send({
            Status: "Success",
            length: message.length,
            data: message
        })
    }catch(err){
        console.log(err)

        return handleError(res, 500, "Internal server error")
    }
})

router.get("/messages/user/:id", verifyToken, async function (req, res){
    try{
        let message = await Message.find( { $or: [
            {sender_id: req.params.id},
            {receiver_id: req.params.id},
        ], }).populate("sender_id receiver_id")
        if(!message){
            return handleError(res, 403, "No messaage")
        }

        return res.status(200).send({
            Status: "Success",
            length: message.length,
            data: message
        })
    }catch(err){
        console.log(err)

        return handleError(res, 500, "Internal server error")
    }
})


router.delete("/message/delete/:id", verifyToken, async function (req, res){
    try{
        let { id } = req.params

        let message = await Message.findByIdAndDelete(id)

        if(!message){
            return handleError(res, 403, "Unable to delete")
        }

        return res.status(200).send({message: "message deleted"})
    }catch(err){
        return handleError(res, 500,  "Internal server errror ")
    }
})


module.exports = router 