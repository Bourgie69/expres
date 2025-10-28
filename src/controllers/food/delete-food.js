import { Food } from "../../model/food-model.js";

export const deleteFood = async (req, res) => {
  const id = req.body.id;
  const deletedFood = await Food.findByIdAndDelete(id);
  res.status(200).json(deletedFood);
};
