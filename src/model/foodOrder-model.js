import mongoose from "mongoose";
const { Schema, model } = mongoose;


const FoodOrderItem = new Schema({
  food: { type: Schema.ObjectId, require: true, ref: "food" },
  quantity: { type: Number, require: true },
});

const FoodOrderSchema = new Schema({
  name: { type: String, require: true },
  user: { type: Schema.Types.ObjectId, require: true, ref: "User" },
  foodOrderItems: [FoodOrderItem],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
  },
  totalPrice: { type: Number, require: true },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

export const FoodOrder = mongoose.model("foodOrder", FoodOrderSchema);
