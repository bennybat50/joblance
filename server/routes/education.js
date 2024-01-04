const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const { useAsync, utils, errorHandle, } = require('../core');
const ModelPerson = require('../models/model.person');
const ModelEducation = require('../models/model.education');
const router = express.Router()



 
    router.put('/education/edit', async function (req, res){

    try {
        
        const id = req.body.id;
        const body = req.body
        await ModelEducation.updateOne({ _id: id }, body).then(async () => {
            const education = await ModelEducation.find({ _id: id });
            return res.json(utils.JParser('Education Update Successfully', !!education, education));
        })

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

 
    router.post('/education', async function (req, res){

    try{

        const education = await ModelEducation.create(req.body)
        return res.json(utils.JParser('Education created successfully', !!education, education));

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }

})

     

    router.get('/education/:id', async function (req, res){

    try {
        const education = await ModelEducation.findOne({ _id: req.params.id });
        return res.json(utils.JParser('Education fetch successfully', !!education, education));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

 
    router.get('/education/all', async function (req, res){

    try {
        const education = await ModelEducation.find();
        return res.json(utils.JParser('Education fetch successfully', !!education, education));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

 
    router.get('/education/user/:id', async function (req, res){
    try {
        const education = await ModelEducation.find({ user_id: req.params.id });
        return res.json(utils.JParser('User Education fetch successfully', !!education, education));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

 
    router.delete('/education/deletes', async function (req, res){
    try {
        if (!req.body.id) return res.status(402).json({ msg: 'provide the id ' })

        await ModelEducation.deleteOne({ _id: req.body.id })
        return res.json(utils.JParser('Education deleted successfully', true, []));

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }

});

module.exports = router 