const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const { useAsync, utils, errorHandle, } = require('../core');
const ModelPerson = require('../models/model.person');
const ModelSkill = require('../models/model.skill');



router.put('/skill/edit', async function (req, res) {

    try {
        
        const id = req.body.id;
        const body = req.body
        await ModelSkill.updateOne({ _id: id }, body).then(async () => {
            const skill = await ModelSkill.find({ _id: id });
            return res.json(utils.JParser('Skill Update Successfully', !!skill, skill));
        })

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.post('/skill', async function (req, res) {

    try{

        const skill = await ModelSkill.create(req.body)
        return res.json(utils.JParser('Skill created successfully', !!skill, skill));

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }

})

router.get('/skill/:id', async function (req, res) {

    try {
        const skill = await ModelSkill.findOne({ _id: req.params.id });
        return res.json(utils.JParser('Skill fetch successfully', !!skill, skill));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.get('/skill/all',  async function (req, res) {

    try {
        const skill = await ModelSkill.find();
        return res.json(utils.JParser('Skill fetch successfully', !!skill, skill));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.get('/skill/user/:id',  async function (req, res) {

    try {
        const skill = await ModelSkill.find({ user_id: req.params.id });
        return res.json(utils.JParser('User Skill fetch successfully', !!skill, skill));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.delete('/skill/deletes', async function (req, res) {
    try {
        if (!req.body.id) return res.status(402).json({ msg: 'provide the id ' })

        await ModelSkill.deleteOne({ _id: req.body.id })
        return res.json(utils.JParser('Skill deleted successfully', true, []));

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }

});