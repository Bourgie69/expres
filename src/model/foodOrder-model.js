import mongoose from "mongoose";
const { Schema, model } = mongoose;

const foodOrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true, default: "No name" },
  totalPrice: { type: Number, required: true, default: "No price" },
//   foodOrderItems: [{ type: , default: null }],
  status: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date, required: true, default: Date.now() },
});

export const FoodOrder = model("FoodOrder", foodOrderSchema);
