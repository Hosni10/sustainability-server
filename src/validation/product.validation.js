import Joi from "joi";

const addProductSchema = Joi.object({
  title: Joi.string().required().min(2).max(50).messages({
    "string.empty": "Product title is required",
    "string.min": "Product title should be at least 5 characters long",
    "string.max": "Product title should not exceed 50 characters long",
  }),
  description: Joi.string().required().min(2).max(500).messages({
    "string.empty": "Product description is required",
    "string.min": "Product description should be at least 10 characters long",
    "string.max": "Product description should not exceed 500 characters long",
  }),
  price: Joi.number().required().positive().max(1000).messages({
    "number.base": "Price should be a number",
    "number.positive": "Price should be a positive number",
    "number.max": "Price should not exceed $1000",
    "any.required": "Price is required",
  }),
  category: Joi.string()
    .required()
    .valid("Smart Energy", "Recycling", "Green Delivery", "Training" ,"Personal Care","Home & Living")
    .messages({
      "any.required": "Product category is required",
      "any.only": "Invalid Product Category",
    }),
    stock: Joi.number().required().positive().max(1000).messages({
      "number.base": "stock should be a number",
      "number.positive": "stock should be a positive number",
      "number.max": "stock should not exceed $1000",
      "any.required": "stock is required",
    }),
});

const updateProductSchema = Joi.object({
  name: Joi.string().min(5).max(50).messages({
    "string.min": "Product name should be at least 5 characters long",
    "string.max": "Product name should not exceed 50 characters long",
    "string.empty": "Product name is required",
  }),
  description: Joi.string().min(10).max(500).messages({
    "string.min": "Product description should be at least 10 characters long",
    "string.max": "Product description should not exceed 500 characters long",
    "string.empty": "Product description is required",
  }),
  price: Joi.number().positive().max(1000).messages({
    "number.positive": "Price should be a positive number",
    "number.max": "Price should not exceed $1000",
    "any.required": "Price is required",
  }),
  catergory: Joi.string()
    .valid("Smart Energy", "Recycling", "Green Delivery", "Training")
    .messages({
      "any.required": "Product category is required",
      "any.only": "Invalid Product Category",
    }),
});

export { addProductSchema, updateProductSchema };
