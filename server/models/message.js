const mongoose = require("mongoose")
const messageSchema = new mongoose.Schema({
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
    text:{
        type:String,
        // required: true
    },
    reply:{
        type:String,
        // required: true
    },
    // response_id:[{type:mongoose.Schema.Types.ObjectId, ref:"response"}],

},
{timestamps: true }
)

const messageModel = mongoose.model("message", messageSchema)
module.exports = messageModel