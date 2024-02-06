const mongoose = require("mongoose")
const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    offeredSalary: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Both"],
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },

    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    requirement: {
        type: String,
        required: true
    },
    responsabilities: {
        type: String,
        required: true
    },
    jobCategory_id: {
        type: String,
        required: true,
        ref: "jobCategory"
    },
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "company",
    },
    jobDescription: {
        type: String,
        required: true
    },
    application_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "apply" }],
    is_hired:{
        type:Boolean,
        dafault:false
    }



},
    { timestamps: true })

const jobModel = mongoose.model("job", jobSchema)
module.exports = jobModel