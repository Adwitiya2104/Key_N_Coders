import mongoose from "mongoose";
const { Schema } = mongoose;

const roadmapSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    modules: [{
        title: {
            type: String,
            required: true,
            trim: true
        },
        numberofQuestions:{
            type:Number,
            required:true
        },
        questions:[
            {
                type: Schema.Types.ObjectId,
                ref:"Question"
            }
        ]
        
    }],

}, {
    timestamps: true
});

export const Roadmap = mongoose.model('Roadmap', roadmapSchema);
