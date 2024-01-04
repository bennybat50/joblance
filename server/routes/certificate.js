const express = require('express')
const router = express.Router()
const dotenv = require("dotenv")
dotenv.config()
const { useAsync, utils, errorHandle, } = require('../core');
const ModelPerson = require('../models/model.person');
const ModelCertificate = require('../models/model.certificate');



router.put('/certificate/edit', async function (req, res){

    try {
        
        const id = req.body.id;
        const body = req.body
        await ModelCertificate.updateOne({ _id: id }, body).then(async () => {
            const certificate = await ModelCertificate.find({ _id: id });
            return res.json(utils.JParser('Certificate Update Successfully', !!certificate, certificate));
        })

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.post('/certificate', async function (req, res){

    try{

        const certificate = await ModelCertificate.create(req.body)
        return res.json(utils.JParser('Certificate created successfully', !!certificate, certificate));

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }

})

router.get('/certificate/:id', async function (req, res){

    try {
        const certificate = await ModelCertificate.findOne({ _id: req.params.id });
        return res.json(utils.JParser('Certificate fetch successfully', !!certificate, certificate));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})


router.get('/certificate/all',  async function (req, res){

    try {
        const certificate = await ModelCertificate.find();
        return res.json(utils.JParser('Certificate fetch successfully', !!certificate, certificate));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

 
    router.get('/certificate/user/:id',  async function (req, res){
    try {
        const certificate = await ModelCertificate.find({ user_id: req.params.id });
        return res.json(utils.JParser('User Certificate fetch successfully', !!certificate, certificate));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

     router.delete('/certificate/deletes',  async function (req, res){
    try {
        if (!req.body.id) return res.status(402).json({ msg: 'provide the id ' })

        await ModelCertificate.deleteOne({ _id: req.body.id })
        return res.json(utils.JParser('Certificate deleted successfully', true, []));

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }

});

module.exports = router 