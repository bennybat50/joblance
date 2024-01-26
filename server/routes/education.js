const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
 const ModelEducation = require('../models/cv-models/education');
const router = express.Router()




router.put('/education/edit', async function (req, res) {

    try {

        const id = req.body.id;
        const body = req.body
        await ModelEducation.updateOne({ _id: id }, body).then(async () => {
            const education = await ModelEducation.find({ _id: id });
            res.status(200).send({ message: "Education Update successfully", data: education });
        })

    } catch (e) {
        console.log(e.message);
    }
})


router.post('/education', async function (req, res) {

    try {

        const education = await ModelEducation.create(req.body)
        res.status(200).send({ message: "Education Create successfully", data: education });

    } catch (e) {
        console.log(e.message);
    }

})



router.get('/education/:id', async function (req, res) {

    try {
        const education = await ModelEducation.findOne({ _id: req.params.id });
        res.status(200).send({ message: "Education Fetch successfully", data: education });
    } catch (e) {
        console.log(e.message);
    }
})


router.get('/education/all', async function (req, res) {

    try {
        const education = await ModelEducation.find();
        res.status(200).send({ message: "Education Fetch successfully", data: education });
    } catch (e) {
        console.log(e.message);
    }
})


router.get('/education/user/:id', async function (req, res) {
    try {
        const education = await ModelEducation.find({ user_id: req.params.id });
        res.status(200).send({ message: "Education Fetch successfully", data: education });
    } catch (e) {
        console.log(e.message);
    }
})


router.post('/education/deletes', async function (req, res) {
    try {
        if (!req.body.id) return res.status(402).json({ msg: 'provide the id ' })

        await ModelEducation.deleteOne({ _id: req.body.id })
        res.status(200).send({ message: "Education delete successfully", data: education });

    } catch (e) {
        console.log(e.message);
    }

});

module.exports = router 