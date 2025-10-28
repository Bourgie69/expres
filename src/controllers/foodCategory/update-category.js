import { FoodCategoryModel } from "../../model/foodCategory-model.js";

export const updateCategory = async (req, res) => {
  const data = req.body;
  const updatedCategory = await FoodCategoryModel.findByIdAndUpdate(data.id, {
    name: data.name,
  });
  res.status(200).json(updatedCategory);
};