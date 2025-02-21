import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "shipped", "delivered", "canceled"], default: "pending" },
    paymentMethod: { type: String, enum: ["credit_card", "paypal", "cash_on_delivery"], required: true },
    createdAt: { type: Date, default: Date.now }
  });


module.exports = mongoose.model("Order", orderSchema)