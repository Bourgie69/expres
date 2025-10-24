import { Food } from "../../model/food-model.js";

export const updateFood = async (req, res) => {
  const data = req.body;
  const updatedFood = await Food.findByIdAndUpdate(data.id, {
    name: data.name,
  });
  res.status(200).json(updatedFood);
};
