const mongoose=require("mongoose");

const messageModel=mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    msg:{
        type:String,
        trim:true
    },
    chat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Chat"
    }
},{
    timestamps:true

});

const message=mongoose.model('Message',messageModel);
module.exports=message;