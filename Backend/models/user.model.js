import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
fullName:{
    type: String,
    required: true
},
password:{
    type: String,
    required: true,
},
userName:{
    type: String,
    required: true,
    unique: true
},
Gender:{
    type: String,
    required: true,
    enum:["male","female","others"]
},
profilePic:{
    type: String,
    default: ""
},

},{timestamps: true});


const User = mongoose.model("User", userSchema);

export default User;