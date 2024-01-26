const mongoose = require("mongoose")
const companySchema = new mongoose.Schema({
    companyLogo: {
        type: String,
    },
    image: {
        type: String, 
    },
    bannerImage: {
        type: String
    },
    companyName: {
        type: String,
         unique: true 
    },
    phone: {
        type: String, 
        default:""
    },
    email: {
        type: String,
        default:""
    },
    website: {
        type: String,
        default:""
     },
    estSince: {
        type: String,
        default:""
     },
    teamSize: {
        type: String,
        default:""
     },
    Description: {
        type: String,
        default:""
     },
   
    user_id:{type:mongoose.Schema.Types.ObjectId, ref:"user"},
    job_id:[{type:mongoose.Schema.Types.ObjectId, ref:"job"}],
    message_id:[{type:mongoose.Schema.Types.ObjectId, ref:"message"}],

    


})

const companyModel = mongoose.model("company", companySchema)
module.exports = companyModel