import { FoodOrder } from "../../model/foodOrder-model.js";
import {User} from "../../model/user-model.js"

export const getOrder = async (req, res) => {
  const orders = await FoodOrder.find().populate("user");
  res.status(200).json(orders);
};
