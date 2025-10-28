import { FoodCategoryModel } from "../../model/foodCategory-model.js";

export const createCategory = async (req, res) => {
  try {
    const foodCategory = await FoodCategoryModel.create(req.body);
    res.status(201).json(foodCategory);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};