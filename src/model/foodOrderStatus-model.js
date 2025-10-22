import mongoose from "mongoose";
const { Schema, model } = mongoose;

const foodOrderStatusSchema = new Schema({
  pending: { type: Boolean, required: true, default: false },
  canceled: { type: Boolean, required: true, default: false },
  delivered: { type: Boolean, required: true, default: false },
});

export const foodOrderStatus = model("FoodOrderStatus", foodOrderStatusSchema);
