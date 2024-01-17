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
    gender:{
        type:String,
        default:""
    },
    website:{
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""
    },
     
    country:{
        type:String,
        default:""
    },
    jobtype:{
        type:String,
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
         default:""
    },

    currentSalary:{
        type: String,
         default:""
    },

    expectedSalary:{
        type: String,
         default:""
    },
    age:{
        type: String,
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