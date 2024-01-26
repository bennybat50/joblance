const mongoose = require('mongoose')

const CVSkillSchema=new mongoose.Schema({
    user_id: {
        type:String,
        ref: "user",
        required: true 
    },
    name:{
        type:String, 
    },
     
    time_created:{type:Number, default:()=>Date.now()},	
    updated_at:{type:Number, default:()=>Date.now()}	
})


const ModelSkill=mongoose.model("model-skill", CVSkillSchema)

module.exports=ModelSkill