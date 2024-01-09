const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    profileImage:{
        type:String
    },
    fullName:{
        type:String,
        required: true 
    },
    phone:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    website:{
        type:String,
        // required: true
    },
    jobTitle:{
        type:String,
    },
    jobType:{
        type: String,
        enum: ["Full Time", "Part Time", "Freelance"],
    },
    qualification:{
        type:String,
        // required: true
    },
    language:{
        type:String,
    },
    jobCategory_id:{
        type:String,
        ref: "jobCategory"
    },
    experience:{
        type: String,
        enum: ["Beginner", "One year", "two years", "three years", "four years", "five years"],
    },

    currentSalary:{
        type: String,
        enum: ["10 - 20k", "20 - 30k", "30 - 40k", "40 - 50k", ],
    },

    expectedSalary:{
        type: String,
        enum: ["10 - 20k", "20 - 30k", "30 - 40k", "40 - 50k", ],
    },
    age:{
        type: String,
        enum: ["20 year", "25+ years", "30+ years", "40+ years"],
    },
    description:{
        type:String,
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
        required: true 
    },
    role:{
        type: String,
        default: "candidate"
    },
    message_id:[{type:mongoose.Schema.Types.ObjectId, ref:"message"}],


})

const userModel = mongoose.model("user", userSchema)
module.exports = userModel