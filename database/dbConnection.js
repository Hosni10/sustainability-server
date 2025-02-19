import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

export const dbConnection = mongoose.connect(
    process.env.URI
 
).then(
    () => console.log("Connected to Database"),
).catch(
    (error) => console.error("Error connecting to MongoDB: ", error)
)