const mongoose = require("mongoose")
const messageSchema = new mongoose.Schema({
    sender_id: {
        type: String,
        ref: "user",
        required: true
    },
    receiver_id: {
        type: String,
        ref: "user",
        required: true
    },
    text: {
        type: String,
        // required: true
    },
},
    { timestamps: true }
)

const messageModel = mongoose.model("message", messageSchema)
module.exports = messageModel