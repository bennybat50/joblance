const mongoose = require("mongoose")
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    content: {
        type: String,
        required: true 
    },
    isPublic: {
        type: Boolean,
        required: true 
    },
    image: {
        type: String,
        required: true 
    },
    user_id: {
        type:String,
        ref: "user",
        required: true 
    },
    interest_id:{
        type: String,
        ref: "interest",
        required: true
    }
},
{timestamps: true}
)

const articleModel = mongoose.model("article", articleSchema)
module.exports = articleModel