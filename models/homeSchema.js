const mongoose =require("mongoose");

const UserSchema = mongoose.Schema({

    name:{
        type : String,
        required:true
    },
    class_n:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone_no:{
        type:Number,
        required:true,
        unique:true
    },


},{timestamps : true});

module.exports = mongoose.model("Registeruser",UserSchema)