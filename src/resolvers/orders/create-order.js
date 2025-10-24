import { FoodOrder } from "../../model/foodOrder-model.js";

export const createOrder = async (req, res) => {
  const orders = await FoodOrder.create(req.body);
  res.status(200).json(orders);
};
