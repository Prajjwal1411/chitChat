const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb+srv://prajjwal14112000:Prajjwal@1411@chitchat.wk8slto.mongodb.net/chitChat?retryWrites=true&w=majority&appName=chitChat")
.then(()=>{

    console.log("Database connected successfully");

}).catch(err=>{
    console.log(err);
});