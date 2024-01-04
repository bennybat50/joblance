const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const { useAsync, utils, errorHandle, } = require('../core');
const ModelPerson = require('../models/model.person');
const ModelReference = require('../models/model.reference');
const router = express.Router()



router.put('/reference/edit', async function (req, res) {

    try {

        const id = req.body.id;
        const body = req.body
        await ModelReference.updateOne({ _id: id }, body).then(async () => {
            const reference = await ModelReference.find({ _id: id });
            return res.json(utils.JParser('Reference Update Successfully', !!reference, reference));
        })

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.post('/reference', async function (req, res) {

    try {

        const reference = await ModelReference.create(req.body)
        return res.json(utils.JParser('Reference created successfully', !!reference, reference));

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }

})


router.get('/reference/:id', async function (req, res) {
    try {
        const reference = await ModelReference.findOne({ _id: req.params.id });
        return res.json(utils.JParser('Reference fetch successfully', !!reference, reference));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.get('/reference/all', async function (req, res) {
    try {
        const reference = await ModelReference.find();
        return res.json(utils.JParser('Reference fetch successfully', !!reference, reference));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.get('/reference/user/:id', async function (req, res) {

    try {
        const reference = await ModelReference.find({ user_id: req.params.id });
        return res.json(utils.JParser('User Reference fetch successfully', !!reference, reference));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

router.delete('/reference/deletes', async function (req, res) {
    try {
        if (!req.body.id) return res.status(402).json({ msg: 'provide the id ' })

        await ModelReference.deleteOne({ _id: req.body.id })
        return res.json(utils.JParser('Reference deleted successfully', true, []));

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }

});
module.exports = router 