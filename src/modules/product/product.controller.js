import { Product } from "../../../database/models/product.model.js";
import imagekit, { destroyImage } from "../../utilities/imagekitConfigration.js";
import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 5)

const addProduct = async (req, res, next) => {
  try {
    const { title, price, description, category,stock } = req.body;
    
    console.log(req.body);
    // console.log(req.files);
    
    if (!req.files) {
      return res.status(400).json({ message: "Image is required" });
    }

    const customId = nanoid();
    const uploadedImages = [];

    for (const file of req.files) {
      const uploadResult = await imagekit.upload({
        file: file.buffer, 
        fileName: file.originalname,
        folder: `Sustainability/Product/${customId}`,
      });

      uploadedImages.push({
        image_url: uploadResult.url,
        image_Id: uploadResult.fileId,
      });
    }


      const newProduct = new Product({
        title,
        price,
        description,
        category,
        images:uploadedImages,
        stock
      });

      console.log(newProduct);
      
      
      if (!newProduct) {
        for (const image of uploadedImages) {
          await destroyImage(image.public_id);
        }
        return next(new Error("Failed to add the unit. Please try again later.", { cause: 400 }));
      }
      
      await newProduct.save();


    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding product" });
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products" });
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Success", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching product" });
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { name, price, description, category } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, category },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating product" });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting product" });
  }
};

export {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
