import mongoose from "mongoose";
import { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = Schema({
    videoFile:{
        type:String, //here we will add cloudnary url
        required:true,
    },
    videoTitle:{
        type:String,
        required:true,
        trim:true
    },
    videoDescription:{
        type:String,
        required:true,
        trim:true
    },
    videoThumbnail:{
        type:String,
        required:true,
        trim:true

    },
    courseVideo:{
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    videoDuration:{
        type:Number,
        required:true
    }
},{timestamps:true})
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",videoSchema)
