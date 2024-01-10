const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    profileImage:{
        type:String,
        default:""
    },
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
    website:{
        type:String,
        default:""
    },
    jobTitle:{
        type:String,
        default:""
    },
    jobType:{
        type: String,
        enum: ["Full Time", "Part Time", "Freelance"],
        default:""
    },
    qualification:{
        type:String,
        default:""
    },
    language:{
        type:String,
        default:""
    },
    jobCategory_id:{
        type:String,
        ref: "jobCategory",
        default:""
    },
    experience:{
        type: String,
        enum: ["Beginner", "One year", "two years", "three years", "four years", "five years"],
        default:""
    },

    currentSalary:{
        type: String,
        enum: ["10 - 20k", "20 - 30k", "30 - 40k", "40 - 50k", ],
        default:""
    },

    expectedSalary:{
        type: String,
        enum: ["10 - 20k", "20 - 30k", "30 - 40k", "40 - 50k", ],
        default:""
    },
    age:{
        type: String,
        enum: ["20 year", "25+ years", "30+ years", "40+ years"],
        default:""
    },
    description:{
        type:String,
        default:""
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