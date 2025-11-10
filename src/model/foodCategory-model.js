import mongoose from 'mongoose'

const Schema = mongoose.Schema;


const FoodCategorySchema = new Schema({
    name: { type: String, require: true },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now }
});

export const FoodCategory = mongoose.model('foodCategory', FoodCategorySchema);