import mongoose from "mongoose";
const { Schema, model } = mongoose;

const foodSchema = new Schema({
  foodName: { type: String, required: true, default: "No name" },
  price: { type: Number, required: true, default: "No price" },
  image: [{ type: String, default: null }],
  ingredients: { type: String, required: true, default: "No ingredients" },
  category: { type: Schema.Types.ObjectId, required: true, default: null },
  createdAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date, required: true, default: Date.now() },
});

export const Food = model("Food", foodSchema);
