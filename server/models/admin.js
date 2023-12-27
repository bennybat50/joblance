const mongoose = require("mongoose")
const msg = "field is required "
const adminSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: [true, msg]
    },
    lastName: {
        type: String, 
        required: [true, msg]
    },
    email: {
        type: String, 
        required: [true, msg]
    },
     password: {
        type: String, 
        required: [true, msg]
    },
    profile_photo: {
        type: String, 
        // required: [true, msg]
    },
    role:{
        type: String,
        default: "Admin"
    }
})

const adminModel = mongoose.model("admin", adminSchema)
module.exports = adminModel;