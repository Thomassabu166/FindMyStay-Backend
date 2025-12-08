const mongoose=require('mongoose');

const PropertySchema=new mongoose.Schema({
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    facilities:{
        type:String,
        required:false
    },
    image:{
        type:String,
        default:""
    },
    isAvailable:{
        type:Boolean,
        default:true
    },
    isApproved:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

module.exports=mongoose.model('property',PropertySchema);