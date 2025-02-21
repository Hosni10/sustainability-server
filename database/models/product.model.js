import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ["Smart Energy", "Recycling", "Green Delivery", "Training","Personal Care","Home & Living"],
    required: true,
  },
  images: [
    {
      image_url: {
        type: String,
        required: true,
      },
      image_Id: {
        type: String,
        required: true,
      },
    },
  ],
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  reviews: [{ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    rating: { type: Number, required: true },
    comment: { type: String }
  }],
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  customId:String
});

export const Product = mongoose.model("Product", productSchema);
