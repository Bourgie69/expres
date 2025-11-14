import { FoodCategoryModel } from "../../model/foodCategory-model.js";

export const getCategory = async (req, res) => {
  try {
    const foodCategory = await FoodCategoryModel.find();
    res.json(foodCategory);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
