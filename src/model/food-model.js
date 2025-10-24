import mongoose from "mongoose";
const { Schema, model } = mongoose;

const foodSchema = new Schema({
  name: { type: String, required: true, default: "No name" },
  price: { type: Number, required: true, default: "No price" },
  image: [{ type: String, default: null }],
  ingredients: { type: String, default: "No ingredients" },
  category: { type: Schema.ObjectId, default: null },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const Food = mongoose.model("Food", foodSchema);
