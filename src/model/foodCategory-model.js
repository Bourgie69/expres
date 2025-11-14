import mongoose from 'mongoose'

const Schema = mongoose.Schema;


const FoodCategorySchema = new Schema({
    name: { type: String, require: true },
    numberOfFoods: {type: Number},
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now }
});

export const FoodCategoryModel = mongoose.model('foodCategory', FoodCategorySchema);