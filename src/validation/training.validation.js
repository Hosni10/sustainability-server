import Joi from "joi";

export const addTrainingSchema = Joi.object({
  title: Joi.string().required().min(5).max(50).messages({
    "string.empty": "Product name is required",
    "string.min": "Product name should be at least 5 characters long",
    "string.max": "Product name should not exceed 50 characters long",
  }),
  description: Joi.string().required().min(10).max(500).messages({
    "string.empty": "Product description is required",
    "string.min": "Product description should be at least 10 characters long",
    "string.max": "Product description should not exceed 500 characters long",
  }),
  duration: Joi.number().min(1).max(365).required().messages({
    "number.min": "Duration should be at least 1 day",
    "number.max": "Duration should not exceed 365 days",
    "number.base": "Duration should be a number",
  }),
  price: Joi.number().required().positive().max(1000).messages({
    "number.base": "Price should be a number",
    "number.positive": "Price should be a positive number",
    "number.max": "Price should not exceed $1000",
    "any.required": "Price is required",
  }),
});

export const updateTrainingSchema = Joi.object({
    title: Joi.string().min(5).max(50).messages({
      "string.empty": "Product name is required",
      "string.min": "Product name should be at least 5 characters long",
      "string.max": "Product name should not exceed 50 characters long",
    }),
    description: Joi.string().min(10).max(500).messages({
      "string.empty": "Product description is required",
      "string.min": "Product description should be at least 10 characters long",
      "string.max": "Product description should not exceed 500 characters long",
    }),
    duration: Joi.number().min(1).max(365).messages({
      "number.min": "Duration should be at least 1 day",
      "number.max": "Duration should not exceed 365 days",
      "number.base": "Duration should be a number",
    }),
    price: Joi.number().positive().max(1000).messages({
      "number.base": "Price should be a number",
      "number.positive": "Price should be a positive number",
      "number.max": "Price should not exceed $1000",
      "any.required": "Price is required",
    }),
  });
