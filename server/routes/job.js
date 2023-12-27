const express = require("express")
const router = express.Router()
const Job = require("../models/job")
const Company = require("../models/company")
const JobCategory = require("../models/job-category")
const verifyToken = require("../middlewares/verifyToken")
const handleError = require("../middlewares/error")


// POST JOB
router.post("/post-job", verifyToken, async function (req, res) {
    try {
        let { jobCategory_id, company_id } = req.body;

        let category = await JobCategory.findById(jobCategory_id);
        let company = await Company.findById(company_id);

        if (!category || !company) {
            return handleError(res, 404, "Job category and company required");
        }

        let newJob = new Job(req.body);
        await newJob.save();

        company.job_id.push(newJob._id);
        await company.save();

        category.job_id.push(newJob._id);
        await category.save();  

        res.status(200).send({ message: "Job created successfully", data: newJob });
    } catch (err) {
        return handleError(res, 500, "Internal server error");
    }
});


//GET  ALL JOBS 
router.get("/jobs", verifyToken, async function (req, res){
    try{
        let job = await Job.find().populate("jobCategory_id company_id")

        if(!job){
            return handleError(res, 404, "No job")
        }

        return res.status(200).send({
            status: "Status",
            message: "jobs",
            length: job.length,
            data: job
        })
    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})


// SINGLE JOB
router.get("/job/:id", verifyToken, async function (req, res){
    try{
        let { id } = req.params;
        let job = await Job.findById(id).populate("jobCategory_id company_id")

        if(!job){
            return handleError(res, 404, "Job does not exist ")
        }

        return res.status(200).send({
            Status: "Status",
            message: "Job",
            data: job
        })
    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})


router.put("/job/update/:id", verifyToken, async function (req, res){
    try{

        let { id } = req.params;
        let updateJob = req.body

        let result = await Job.findByIdAndUpdate(id, updateJob)

        if(!result){
            return handleError(res, 404, "Job does not exist")
        }

        return res.status(200).send({
            message: "Job updated"
        })
    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})


router.delete("/job/delete/:id", verifyToken, async function (req, res) {
    try{
        let { id } = req.params;
        let job = await Job.findByIdAndDelete(id)

        if(!job){
            return handleError(res, 403, "Job deleted")
        }

        res.status(200).send({message: "Job deleted"})

    }catch(err){
        return handleError(res, 500, "Imternal server error")
    }
})

module.exports = router