import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    coverImg:{
        type:String,
    },
    title:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
    },
    category:{
        type:String,
        default:"uncategorized",
    },
    content:{
        type:String,
        required:true,
    },
    isFeatured:{
        type:Boolean,
        default:false,
    },
    visits:{
        type:Number,
        default:0,
    }
},{timestamps:true});

export default mongoose.model("Post",postSchema);