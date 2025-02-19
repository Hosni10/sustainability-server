import { Initiative } from "../../../database/models/greenInitiative.model.js";

const addInitiative = async (req, res, next) => {
  try {
    const { title, description, startDate, endDate, country, city, createdBy } =
      req.body;
    const initiative = new Initiative({
      title,
      description,
      startDate,
      endDate,
      country,
      city,
      createdBy,
    });
    await initiative.save();
    res
      .status(201)
      .json({ message: "Initiative added successfully", initiative });
  } catch (error) {
    res.status(500).json({ message: "Error adding initiative", error });
  }
};

const updateInitiative = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, startDate, endDate, country, city, createdBy } =
      req.body;
    const updatedInitiative = await Initiative.findByIdAndUpdate(
      id,
      { title, description, startDate, endDate, country, city, createdBy },
      { new: true }
    );
    if (!updatedInitiative) {
      return res.status(404).json({ message: "Initiative not found" });
    }
    res
      .status(200)
      .json({
        message: "Initiative updated successfully",
        initiative: updatedInitiative,
      });
  } catch (error) {
    res.status(500).json({ message: "Error updating initiative", error });
  }
};

const deleteInitiative = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedInitiative = await Initiative.findByIdAndDelete(id);
    if (!deletedInitiative) {
      return res.status(404).json({ message: "Initiative not found" });
    }
    res
      .status(200)
      .json({
        message: "Initiative deleted successfully",
        initiative: deletedInitiative,
      });
  } catch (error) {
    res.status(500).json({ message: "Error deleting initiative", error });
  }
};

const getInitiatives = async (req, res, next) => {
  try {
    const initiatives = await Initiative.find({});
    res.status(200).json({ message: "Success", initiatives });
  } catch (error) {
    res.status(500).json({ message: "Error getting initiatives", error });
  }
};

const getInitiativeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const initiative = await Initiative.findById(id);
    if (!initiative) {
      return res.status(404).json({ message: "Initiative not found" });
    }
    res.status(200).json({ message: "Success", initiative });
  } catch (error) {
    res.status(500).json({ message: "Error getting initiative", error });
  }
};

export {
  addInitiative,
  updateInitiative,
  deleteInitiative,
  getInitiatives,
  getInitiativeById,
};
