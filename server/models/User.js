const mongoose = require('mongoose');

const UserSchema=new mongoose({
    username:{
        type:String,
        required:ture
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"student"
    },
    phone:{
        type:String,
        required:false
    }
},{timestamps:true});

module.exports=mongoose.model('User',UserSchema);