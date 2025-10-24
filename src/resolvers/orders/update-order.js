import { FoodOrder } from "../../model/foodOrder-model.js";

export const updateOrder = async (req, res) => {
  const id = req.body.id;
  const updatedOrder = await FoodOrder.findByIdAndUpdate(id, {
    totalPrice: req.body.totalPrice,
  });

  res.status(200).json(updatedOrder);
};
