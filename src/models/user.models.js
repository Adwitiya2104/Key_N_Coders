import mongoose from "mongoose";
import { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { Timestamp } from "mongodb";

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
        index:true,
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    mobile_no:{
        type:String,
        required:true,
        trim:true
    },
    college:{
        type:String,
        required:true
    },
    graduationYear:{
        type:String,
        required:true,
        trim:true
    },
    programEnrolled:{
        type:String,
        enum:{
            values: ["Btech","BCA","MCA","BE","Others"],
            message: "Please specify program if others is selected"
        },
        required:true
    },
    otherProgram:{
        type:String,
        required: function () {
            return this.programEnrolled === "Others"; 
        }
    }
},{
    timestamps:true
})

userSchema.pre("Save",async function(next){
    if(!this.isModified("password")) return next(); //if password has not been moddified mive ahead
    this.password = bcrypt.hash(this.password,10)
    next();
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.method.generateAccessToken = function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id:this._id

    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)}


export const User = mongoose.model("User",userSchema)