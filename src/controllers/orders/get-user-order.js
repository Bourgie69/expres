import { FoodOrder } from "../../model/foodOrder-model.js";

export const getOrderByUser = async (req, res) => {
  const orders = await FoodOrder.find({user: req.params.userId}).populate('foodOrderItems.food')
  res.status(200).json(orders);
};