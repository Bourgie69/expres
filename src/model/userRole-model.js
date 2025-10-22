import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userRoleSchema = new Schema({
  user: { type: Boolean, required: true, default: true },
  admin: { type: Boolean, required: true, default: false },
});

export const userRole = model("userRole", userRoleSchema);
