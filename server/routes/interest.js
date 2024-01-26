const express = require('express')
const router = express.Router()
const Interest = require('../models/interest')
const handleError = require('../middlewares/error')

router.post("/create-interest", async function (req, res){
    let existingInterest = await Interest.findOne({name:req.body.name})
    if(existingInterest){
        return handleError(res, 403, "Interest already exist")
    }

    try{
        let interest = new Interest(req.body)
        await interest.save()
        res.status(200).send({message:"Interest created"})
      
    }catch(e){
        console.log(e)
        res.status(500).send(e.message)
    }
})

router.get("/interests", async function(req, res){
    try{
        let interest = await Interest.find()
        if(!interest){
            return res.status(404).send({message:"There are no interest"})
        }
        return res.status(200).send({
            message:"All interests",
            length:interest.length,
            data:interest 
        })
    }catch(e){
        console.log(e)
        res.status(500).send(e.message)
    }
})


router.get("/interests/:id", async function(req, res){
    try{
        let { id } = req.params
        let interest = await Interest.findById(id)
        if(!interest){
            return res.status(404).send({message:"There are no interest"})
        }
        return res.status(200).send({
            message:"All interests",
            length:interest.length,
            data:interest 
        })
    }catch(e){
        res.status(500).send(e.message)
    }
})


// UPDATE COMPANY 
router.put("/interest/update/:id", async function (req, res){
    try{
        let { id } = req.params
        
        let updateInterest = req.body;
        
        let result  = await Interest.findByIdAndUpdate(id,updateInterest)

        if(!result){
            return handleError(res, 404, "interest does not exist ")
        }

        res.status(200).send({
            status: "Success",
            messsage: "interest details updated"
        })
    }catch(err){
        return handleError(res, 500, "Internal server error ")
    }
})


// DELETE 
router.delete("/interest/delete/:id", async function (req, res){
    try{
        let { id } = req.params

        let interest = await Interest.findByIdAndDelete(id)

        if(!interest){
            return handleError(res, 404, "interest does not exist ")
        }

        res.status(200).send({message: "interest deleted"})
    }catch(e){
        return handleError(res, 500, "Internal server error ")
    }
})


module.exports = router