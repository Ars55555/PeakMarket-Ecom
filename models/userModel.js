import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
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
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:{},
        required:true,
    },
    answer: {
        type: String,
        required:true,
    },
    role:{
        type:Number,
        default:0,
    },

},{timestamps:true});//iss 2nd object se kya hoga ki jb bhi new user create hoga to uska time add ho jayega

export default mongoose.model('users',userSchema);