const { type } = require("express/lib/response")
const mongoose=require("mongoose")
const userschema = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    age:{type:Number},
    // gender:{type:String},
    contact:{type:Number},
    password:{type:String},
    confirmpassword:{type:String}
})
module.exports=new mongoose.model("user",userschema)