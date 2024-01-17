const mongoose = require("mongoose")
const applySchema = new mongoose.Schema({
    job_id: {
        type: String,
        ref: "job",
        required: true 
    },
    user_id: {
        type:String,
        ref: "user",
        required: true 
    },
    company_id: {
        type:String,
        ref: "company",
        required: true 
    },
    message: {
        type:String,
         
    },
    cv_link: {
        type:String,
        
    },
    approved: {
        type:String,
        default:"pending"
    },

},
{timestamps: true}
)

const applyModel = mongoose.model("apply", applySchema)
module.exports = applyModel