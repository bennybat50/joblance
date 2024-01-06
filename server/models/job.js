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
        enum: ["Male", "Female", "Others"],
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
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate : {
        type: Date,
        required: true
    },
    category:{
        type:String,
        required:true,
        enum:["Accounting and Finance", "Counseling Data Entry", "Counseling", "Court Administration", "Human Resources", "Investigative", "IT and Computers","Law Enforcement", "Management",  "Miscellaneous", "Public Relations"]
    },
    company_id: {type: String,
        required: true,
        ref: "company"
    },
    jobDescription: {
        type: String,
        required: true
    },
    application_id:[{type:mongoose.Schema.Types.ObjectId, ref:"apply"}],

})

const jobModel = mongoose.model("job", jobSchema)
module.exports = jobModel