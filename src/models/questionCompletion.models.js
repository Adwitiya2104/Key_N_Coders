import mongoose from "mongoose";
const { Schema } = mongoose;

const questionCompletionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    roadmap: {
        type: Schema.Types.ObjectId,
        ref: 'Roadmap', 
        required: true
    },
    question: {
        type: Schema.Types.ObjectId,
        ref: 'Question', 
        required: true
    },
    completed: {
        type: Boolean,
        default: false 
    },
    
}, {
    timestamps: true
});

export const QuestionCompletion = mongoose.model('QuestionCompletion', questionCompletionSchema);
