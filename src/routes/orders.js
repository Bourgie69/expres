import express from "express";
import { getOrder } from "../controllers/orders/get-order.js";
import { createOrder } from "../controllers/orders/create-order.js";
import { updateOrder } from "../controllers/orders/update-order.js";
import { deleteOrder } from "../controllers/orders/delete-order.js";
import { getOrderByUser } from "../controllers/orders/get-user-order.js";


export const ordersRouter = express.Router();

ordersRouter.get("/", getOrder);

ordersRouter.get("/:userId", getOrderByUser)

ordersRouter.post("/", createOrder);

ordersRouter.put("/", updateOrder);

ordersRouter.delete("/", deleteOrder);
