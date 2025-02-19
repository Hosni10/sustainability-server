import express from "express";
import {
  addProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "./product.controller.js";
import { validation } from "../../middleware/validation.js";
import {
  addProductSchema,
  updateProductSchema,
} from "../../validation/product.validation.js";
import upload from "../../middleware/fileUpload.js";

const productRouter = express.Router();

productRouter.get("/getallproducts", getProducts);
productRouter.get("/getproduct/:id", getProductById);
productRouter.put(
  "/updateproduct/:id",
  validation(updateProductSchema),
  updateProduct
);
productRouter.delete("/deleteproduct/:id", deleteProduct);
productRouter.post("/addproduct", upload,validation(addProductSchema), addProduct);

export default productRouter;
