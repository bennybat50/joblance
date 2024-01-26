const mongoose = require("mongoose")
const interestSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const interestModel = mongoose.model("interest", interestSchema)
module.exports = interestModel