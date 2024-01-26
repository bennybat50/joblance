const express = require('express')
const dotenv = require("dotenv")
const router = express.Router()
dotenv.config()
  const ModelSkill = require('../models/cv-models/skills');



router.put('/skill/edit', async function (req, res) {

    try {
        
        const id = req.body.id;
        const body = req.body
        await ModelSkill.updateOne({ _id: id }, body).then(async () => {
            const skill = await ModelSkill.find({ _id: id });
             res.status(200).send({ message: "Skill Edits successfully",data: skill });
        })

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.post('/skill', async function (req, res) {

    try{

        const skill = await ModelSkill.create(req.body)
         res.status(200).send({ message: "Skill created successfully",data: skill });

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }

})

router.get('/skill/:id', async function (req, res) {

    try {
        const skill = await ModelSkill.findOne({ _id: req.params.id });
         res.status(200).send({ message: "Skill fetch successfully",data: skill });
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.get('/skill/all',  async function (req, res) {

    try {
        const skill = await ModelSkill.find();
         res.status(200).send({ message: "Skill fetch successfully",data: skill });
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.get('/skill/user/:id',  async function (req, res) {

    try {
        const skill = await ModelSkill.find({ user_id: req.params.id });
         res.status(200).send({ message: "Skill fetch successfully",data: skill });
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.post('/skill/deletes', async function (req, res) {
    try {
        if (!req.body.id) return res.status(402).json({ msg: 'provide the id ' })

        await ModelSkill.deleteOne({ _id: req.body.id })
         res.status(200).send({ message: "Skill deleted successfully" });

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }

});

module.exports = router