import mongoose from "mongoose";
const { Schema, model } = mongoose;

const foodCategorySchema = new Schema({
  categoryName: { type: String, required: true, default: null },
  createdAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date, required: true, default: Date.now() },
});

export const FoodCategory = model("FoodCategory", foodCategorySchema);
