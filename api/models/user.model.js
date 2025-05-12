import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    profilePic:{
        type:String,
        default:"",
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    resetPasswordToken:String,
    resetPasswordTokenExpire:Date,
    verificationToken:String,
    verificationTokenExpire:Date,
    
},{timestamps:true});

const User = mongoose.model("User",userSchema)
export default User