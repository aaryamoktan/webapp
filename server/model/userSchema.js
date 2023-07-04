const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        firstname:{
            type:String,
            require:true,
        },
        lastname:{
            type:String,
            require:true,
        },
        select:{
            type:String,
            require:true,
        },
        date:{
            type:Number,
            require:true,
        },
        country:{
            type:String,
            require:true,
        },
        number:{
            type:Number,
            require:true,
        },
        email:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true,
        },
        
    }
)
const model = mongoose.model("mywork",userSchema);
module.exports = model