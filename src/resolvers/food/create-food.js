import { Food } from "../../model/food-model.js";

export const createFood = async (req, res) => {
  try {
    const food = await Food.create(req.body);
    res.status(201).json(food);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
