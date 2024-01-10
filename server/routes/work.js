const express = require('express')
const router = express.Router()
const dotenv = require("dotenv")
dotenv.config()
const ModelWork = require('../models/cv-models/work');



router.put('/work/edit', async function (req, res) {

    try {
        
        const id = req.body.id;
        const body = req.body
        await ModelWork.updateOne({ _id: id }, body).then(async () => {
            const work = await ModelWork.find({ _id: id });
            return res.json(utils.JParser('Work Update Successfully', !!work, work));
        })

    } catch (e) {
        return(e.message, 400)
    }
})

router.post('/work', async function (req, res) {

    try{

        const work = await ModelWork.create(req.body)
         res.status(200).send({ message: "Work created successfully",data: work });

    } catch (e) {
        return(e.message, 400)
    }

})

router.get('/work/:id', async function (req, res) {

    try {
        const work = await ModelWork.findOne({ _id: req.params.id });
        res.status(200).send({ message: "Work fetch successfully",data: work });
     } catch (e) {
        return(e.message, 400)
    }
})

router.get('/work/all', async function (req, res) {

    try {
        const work = await ModelWork.find();
         res.status(200).send({ message: "Work fetch successfully",data: work });
    } catch (e) {
        return(e.message, 400)
    }
})

router.get('/work/user/:id', async function (req, res) {

    try {
    
        const work = await ModelWork.find({ user_id: req.params.id });
        
        res.status(200).send({ message: "Work fetch successfully",data: work });
    } catch (e) {
        return(e.message, 400)
    }
})

router.post('/work/deletes', async function (req, res) {
    try {
        if (!req.body.id) return res.status(402).json({ msg: 'provide the id ' })

        await ModelWork.deleteOne({ _id: req.body.id })
        res.status(200).send({ message: "Work deleted successfully",});
    } catch (e) {
        return(e.message, 400)
    }

});

module.exports = router