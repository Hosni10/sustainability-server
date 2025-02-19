import mongoose from "mongoose";


const carbonRecordSchema =  mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    energyUsage :{
        type: Number,
        required: true
    },
    emissionFactor :{
        type: Number,
        required: true,
        default: 0.55
    },
    carbonFootprint :{
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
})

export const CarbonRecord = mongoose.model('Carbon', carbonRecordSchema)