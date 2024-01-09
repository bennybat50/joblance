const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    // profileImage:{
    //     type:String
    // },
    userName:{
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
    password:{
        type:String,
        required: true 
    },
    message_id:[{type:mongoose.Schema.Types.ObjectId, ref:"message"}],
    // website:{
    //     type:String,
    //     // required: true
    // },
    // jobTitle:{
    //     type:String,
    //     required: true
    // },
    // jobType:{
    //     type: String,
    //     enum: ["Full Time", "Part Time", "Freelance"],
    //     required: true
    // },
    // qualification:{
    //     type:String,
    //     // required: true
    // },
    // language:{
    //     type:String,
    //     required: true
    // },
    // jobCategory_id:{
    //     type:String,
    //     required: true,
    //     ref: "jobCategory"
    // },
    // experience:{
    //     type: String,
    //     enum: ["Beginner", "One year", "two years", "three years", "four years", "five years"],
    //     required: true
    // },

    // currentSalary:{
    //     type: String,
    //     enum: ["10 - 20k", "20 - 30k", "30 - 40k", "40 - 50k", ],
    //     required: true
    // },

    // expectedSalary:{
    //     type: String,
    //     enum: ["10 - 20k", "20 - 30k", "30 - 40k", "40 - 50k", ],
    //     required: true
    // },
    // age:{
    //     type: String,
    //     enum: ["20 year", "25+ years", "30+ years", "40+ years"],
    //     required: true
    // },
    // description:{
    //     type:String,
    //     required: true,
    // },
    // facebook:{
    //     type:String
    // },
    // twitter:{
    //     type:String
    // },
    // linkedin:{
    //     type:String
    // },
    // whatsapp:{
    //     type:String
    // },
    // instagram:{
    //     type:String
    // },
    // pinterest:{
    //     type:String
    // },
    // instagram:{
    //     type:String
    // },
    // pinterest:{
    //     type:String
    // },
    // tumblr:{
    //     type:String
    // },
    // youtube:{
    //     type:String
    // },



})

const userModel = mongoose.model("user", userSchema)
module.exports = userModel