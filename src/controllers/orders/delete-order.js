import { FoodOrder } from "../../model/foodOrder-model.js";

export const deleteOrder = async (req, res) => {
  const id = req.body.id;
  const deletedOrder = await FoodOrder.findByIdAndDelete(id);

  res.status(200).json(deletedOrder);
};