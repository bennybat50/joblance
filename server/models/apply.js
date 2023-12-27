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
    }
},
{timestamps: true}
)

const applyModel = mongoose.model("apply", applySchema)
module.exports = applyModel