import { FoodCategoryModel } from "../../model/foodCategory-model.js";

export const deleteCategory = async (req, res) => {
  const id = req.body.id;
  const deletedCategory = await FoodCategoryModel.findByIdAndDelete(id);
  res.status(200).json(deletedCategory);
};
