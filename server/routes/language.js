const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const { useAsync, utils, errorHandle, } = require('../core');
const ModelPerson = require('../models/model.person');
const ModelLanguage = require('../models/model.language');
const router = express.Router()


router.put('/language/edit', async function (req, res) {

    try {

        const id = req.body.id;
        const body = req.body
        await ModelLanguage.updateOne({ _id: id }, body).then(async () => {
            const language = await ModelLanguage.find({ _id: id });
            return res.json(utils.JParser('Language Update Successfully', !!language, language));
        })

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.post('/language', async function (req, res) {

    try {

        const language = await ModelLanguage.create(req.body)
        return res.json(utils.JParser('Language created successfully', !!language, language));

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }

})

router.get('/language/:id', async function (req, res) {

    try {
        const language = await ModelLanguage.findOne({ _id: req.params.id });
        return res.json(utils.JParser('Language fetch successfully', !!language, language));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.get('/language/all', async function (req, res) {

    try {
        const language = await ModelLanguage.find();
        return res.json(utils.JParser('Language fetch successfully', !!language, language));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.get('/language/user/:id', async function (req, res) {

    try {
        const language = await ModelLanguage.find({ user_id: req.params.id });
        return res.json(utils.JParser('User Language fetch successfully', !!language, language));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.delete('/language/deletes', async function (req, res) {
    try {
        if (!req.body.id) return res.status(402).json({ msg: 'provide the id ' })

        await ModelLanguage.deleteOne({ _id: req.body.id })
        return res.json(utils.JParser('Language deleted successfully', true, []));

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }

});

module.exports = router 