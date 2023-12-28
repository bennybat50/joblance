const mongoose = require("mongoose")
const resposeSchema = new mongoose.Schema({
    response: {
        type: String,
        required: true 
    },
    message_id: {
        type: String,
        required: true,
        ref: "message" 
    }
},

{timestamps: true }
)
const responseModel = mongoose.model("response", resposeSchema)
module.exports = responseModel