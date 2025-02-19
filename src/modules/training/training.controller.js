import { Training } from "../../../database/models/training.model.js";


const addTraining = async(req,res,next) => {
    try{
        const {title ,description , duration , price } = req.body
        const newTraining = new Training({ title ,description , duration , price });
        const result = await newTraining.save();
        res.status(201).json({message:"Training added successfully",result:result});
    }
    catch(err){
        return res.status(500).json({error: err.message});
    }
}

const getAllTrainings = async(req,res,next) => {
    try{
        const trainings = await Training.find({});
        res.json({message:"Success",trainings});
    }
    catch(err){
        return res.status(500).json({error: err.message});
    }
}

const getTrainingById = async(req,res,next) => {
    try{
        const training = await Training.findById(req.params.id);
        if(!training) return res.status(404).json({message:"Training not found"});
        res.json({message:"Success",training});
    }
    catch(err){
        return res.status(500).json({error: err.message});
    }
}

const updateTraining = async(req,res,next) => {
    try{
        const updatedTraining = await Training.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!updatedTraining) return res.status(404).json({message:"Training not found"});
        res.json({message:"Training updated successfully",updatedTraining});
    }
    catch(err){
        return res.status(500).json({error: err.message});
    }
}

const deleteTraining = async(req,res,next) => {
    try{
        const deletedTraining = await Training.findByIdAndDelete(req.params.id);
        if(!deletedTraining) return res.status(404).json({message:"Training not found"});
        res.json({message:"Training deleted successfully", deletedTraining});
    }
    catch(err){
        return res.status(500).json({error: err.message});
    }
}

export {
    addTraining,
    getAllTrainings,
    getTrainingById,
    updateTraining,
    deleteTraining,
 };
