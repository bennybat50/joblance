const mongoose = require('mongoose')

const CVEducationSchema=new mongoose.Schema({
    user_id: {
        type:String,
        ref: "user",
        required: true 
    },
    startDate:{
        type:String, 
        default:"" 
    },
    endDate:{
        type:String,  
        default:""
    },
    school: {
        type: String,
        default:""
    },
    course:{
        type:String,
        default:""
    },
    education_level:{
        type:String,
        default:""
    },
    
    
    time_created:{type:Number, default:()=>Date.now()},	
    updated_at:{type:Number, default:()=>Date.now()}	
})


const ModelEducation=mongoose.model("model-education", CVEducationSchema)

module.exports=ModelEducation