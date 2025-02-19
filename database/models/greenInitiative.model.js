import mongoose from "mongoose";

const initiativeSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    country:{ type: String, required: true},
    city:{ type: String, required: true},
    createdBy: { type: String },
})

export const Initiative = mongoose.model("Initiative", initiativeSchema);