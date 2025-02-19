import mongoose from "mongoose";

const trainingSchema = mongoose.Schema({
    title : {type : String , required : true},
    description : {type : String , required : true},
    duration : {type : String , required : true},
    price : {type:Number , required : true},
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt:{
        type : Date,
        default : Date.now
    }
})

export const Training = mongoose.model("Training", trainingSchema);