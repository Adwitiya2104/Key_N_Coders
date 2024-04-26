import { Timestamp } from "mongodb";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const courseSchema = Schema({
    courseTitle:{
        type:String,
        required:true,
        trim:true
    },
    courseDescription:{
        type:String,
        required:true,
        trim:true
    },
    courseCost:{
        type:Number,
        required:true,
    },
    
},{timestamps:true})

export const Course = mongoose.model("Course",courseSchema)