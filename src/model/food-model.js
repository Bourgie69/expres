import mongoose from "mongoose";
const { Schema, model } = mongoose;
import "./foodCategory-model.js";

const foodSchema = new Schema({
  name: { type: String, required: true, default: "No name" },
  price: { type: Number, default: 0 },
  image: [{ type: String, default: null }],
  ingredients: { type: String, default: "No ingredients" },
  category: { type: Schema.ObjectId, default: null, ref: "foodCategory" },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const Food = mongoose.model("Food", foodSchema);
