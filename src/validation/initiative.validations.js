import Joi from "joi";

export const addInitiativeSchema = Joi.object({
  title: Joi.string().required().min(5).max(50).messages({
    "string.empty": "Product title is required",
    "string.min": "Product title should be at least 5 characters long",
    "string.max": "Product title should not exceed 50 characters long",
  }),
  description: Joi.string().required().min(10).max(500).messages({
    "string.empty": "Product description is required",
    "string.min": "Product description should be at least 10 characters long",
    "string.max": "Product description should not exceed 500 characters long",
  }),
  city: Joi.string().min(2).max(50).required().messages({
    "string.empty": "City is required",
    "string.min": "City must have at least 2 characters",
    "string.max": "City cannot exceed 50 characters",
  }),
  country: Joi.string().min(2).max(50).required().messages({
    "string.empty": "Country is required",
    "string.min": "Country must have at least 2 characters",
    "string.max": "Country cannot exceed 50 characters",
  }),
  startDate: Joi.date().required().iso().messages({
    "date.base": "Invalid date format. Expected YYYY-MM-DD",
    "date.min": "Start date should be a valid date.",
    "date.max": "Start date should not be in the future.",
  }),
  endDate: Joi.date().iso().min(Joi.ref("startDate")).messages({
    "date.base": "Invalid date format. Expected YYYY-MM-DD",
    "date.min": "End date should be a valid date.",
    "date.max": "End date should not be earlier than the start date.",
  }),
});

export const updateInitiativeSchema = Joi.object({
  title: Joi.string().min(5).max(50).messages({
    "string.empty": "Product title is required",
    "string.min": "Product title should be at least 5 characters long",
    "string.max": "Product title should not exceed 50 characters long",
  }),
  description: Joi.string().min(10).max(500).messages({
    "string.empty": "Product description is required",
    "string.min": "Product description should be at least 10 characters long",
    "string.max": "Product description should not exceed 500 characters long",
  }),
  city: Joi.string().min(2).max(50).messages({
    "string.empty": "City is required",
    "string.min": "City must have at least 2 characters",
    "string.max": "City cannot exceed 50 characters",
  }),
  country: Joi.string().min(2).max(50).messages({
    "string.empty": "Country is required",
    "string.min": "Country must have at least 2 characters",
    "string.max": "Country cannot exceed 50 characters",
  }),
  startDate: Joi.date().required().iso().messages({
    "date.base": "Invalid date format. Expected YYYY-MM-DD",
    "date.min": "Start date should be a valid date.",
    "date.max": "Start date should not be in the future.",
  }),
  endDate: Joi.date().iso().min(Joi.ref("startDate")).messages({
    "date.base": "Invalid date format. Expected YYYY-MM-DD",
    "date.min": "End date should be a valid date.",
    "date.max": "End date should not be earlier than the start date.",
  }),
});
