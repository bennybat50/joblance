const mongoose = require("mongoose")
const hireSchema = new mongoose.Schema({
    user_id: {
        type:String,
        required: true,
        ref: "user"
    },
    company_id: {
        type:String,
        required: true,
        ref: "company"
    },
    job_id:{
        type:String,
        required:true,
        ref: "job"
    },
    is_hired:{
        type:Boolean,
        dafault:true
    }
},
{ timestamps: true })

const hireModel = mongoose.model("hire", hireSchema)
module.exports = hireModel