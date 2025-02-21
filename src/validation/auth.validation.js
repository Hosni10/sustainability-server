import Joi from "joi";

export const signupSchema = Joi.object({
    username: Joi.string().min(3).max(30).required().messages({
        "string.min": "Name must be at least 3 characters long",
        "string.max": "Name must be at most 30 characters long",
        "any.required": "Name is required",
    }),
    email: Joi.string().email().required().messages({
        "string.email": "Invalid email address",
        "any.required": "Email is required",
    }),
    password: Joi.string().min(8).required().messages({
        "string.min": "Password must be at least 8 characters long",
        "any.required": "Password is required",
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        "any.only": "Passwords do not match",
    }),
});

export const loginSchema = Joi.object({

    email: Joi.string().email().required().messages({
        "string.email": "Invalid email address",
        "any.required": "Email is required",
    }),
    password: Joi.string().min(8).required().messages({
        "string.min": "Password must be at least 8 characters long",
        "any.required": "Password is required",
    }),

});