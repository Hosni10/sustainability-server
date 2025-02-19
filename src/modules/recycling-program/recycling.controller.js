import { RecyclingProgram } from "../../../database/models/recyclingProgam.model.js";



const addProgram = async (req,res,next)=>{
    try {
        const program = new RecyclingProgram({
            name: req.body.name,
            location: req.body.location,
            description: req.body.description,
        });
        await program.save();
        res.status(201).json(program);
}
catch (err) {
    res.status(500).json({message:"Error"}, err);
}
}


const getAllPrograms = async (req, res, next) => {
    try {
        const programs = await RecyclingProgram.find();
        res.json(programs);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving programs" }, err);
    }
}


const getProgramById = async (req, res, next) => {
    try {
        const program = await RecyclingProgram.findById(req.params.id);
        if (!program) return res.status(404).json({ message: "Program not found" });
        res.json(program);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving program" }, err);
    }
}

const deleteProgram = async (req, res,next) => {
    try {
        const removedProgram = await RecyclingProgram.findByIdAndDelete(req.params.id);
        if (!removedProgram) return res.status(404).json({ message: "Program not found" });
        res.json({ message: "Program deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting program" }, err);
    }
}

const updateProgram = async (req, res, next) => {
    try {
        const updatedProgram = await RecyclingProgram.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProgram) return res.status(404).json({ message: "Program not found" });
        res.json(updatedProgram);
    } catch (err) {
        res.status(500).json({ message: "Error updating program" }, err);
    }
}

export { addProgram, getAllPrograms, getProgramById, deleteProgram, updateProgram };