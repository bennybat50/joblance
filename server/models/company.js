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
        required: true,
        unique: true 
    },
    phone: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    estSince: {
        type: String,
        required: true
    },
    teamSize: {
        type: String,
        required : true
    },
    Description: {
        type: String,
        required: true
    },
    youTube: {
        type:String,
    },
    vimeo: {
        type: String 
    },
    customVideo:{
        type:String
    },
    facebook:{
        type:String
    },
    twitter:{
        type:String
    },
    linkedin:{
        type:String
    },
    whatsapp:{
        type:String
    },
    instagram:{
        type:String
    },
    pinterest:{
        type:String
    },
    instagram:{
        type:String
    },
    pinterest:{
        type:String
    },
    tumblr:{
        type:String
    },
    youtube:{
        type:String
    },
    password:{
        type:String,
        // required: true 
    },
    job_id:[{type:mongoose.Schema.Types.ObjectId, ref:"job"}],
    message_id:[{type:mongoose.Schema.Types.ObjectId, ref:"message"}],

    


})

const companyModel = mongoose.model("company", companySchema)
module.exports = companyModel