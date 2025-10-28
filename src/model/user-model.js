import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  phoneNumber: { type: String, required: true, default: "No number added" },
  booking: [{ type: Schema.Types.ObjectId, ref: "Booking", default: [] }],
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true, default: "No address added" },
  avatarImage: { type: String },
  role: { type: String, enum: ["ADMIN", "USER"] },
  companyId: [{ type: Schema.Types.ObjectId, ref: "Company", default: [] }],
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
  resetCode: { type: String },
  resetCodeExpires: { type: Date },
});

export const User = mongoose.model("User", userSchema);
