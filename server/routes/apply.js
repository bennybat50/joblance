const express = require("express")
const router = express.Router()
const Job = require("../models/job")
const User = require("../models/user")
const Apply = require("../models/apply")
const verifyToken = require("../middlewares/verifyToken")
const handleError = require("../middlewares/error")


// APPLY JOB
router.post("/apply", verifyToken, async function (req, res){
    const existingApplication = await Apply.findOne({ user_id: req.body.user_id });

    if (existingApplication) {
        return res.status(403).send({ message: "You've already applied" });
    }

    try {
        let { job_id, user_id } = req.body

        let job = await Job.findById(job_id)
        let user = await User.findById(user_id)

        if (!job || !user) {
            return handleError(res, 404, "Job and user required");
        }
        
        let newApplication = new Apply(req.body);
        await newApplication.save();


           job.application_id.push(newApplication._id)

        await job.save()

        res.status(200).send({
            message: "Application successful",
            data: newApplication
        });
    } catch (e) {
            return handleError(res, 404, "Job and user required");
    }
})

router.get("/applications", verifyToken, async function (req, res){
    try{
        let application = await Apply.find().populate("user_id job_id")
        if(!application){
            return handleError(res, 500, "No appliation")
        }

        return res.status(200).send({
            status: "Success",
            length: application.length,
            data: application 
        })
    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})

router.delete("/application/delete/:id", verifyToken, async function(req, res){
    try{
        let { id } = req.params 

        let application = await Apply.findByIdAndDelete(id)

        if(!application){
            return handleError(res, 403, "Application does not exist")
        }

        return res.status(200).send({message: "Application deleted"})
    }catch(err){
        return handleError(res, 500, "Internal server error ")
    }
})

module.exports = router 