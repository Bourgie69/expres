import express from "express";
import { getOrder } from "../controllers/orders/get-order.js";
import { createOrder } from "../controllers/orders/create-order.js";
import { updateOrder } from "../controllers/orders/update-order.js";
import { deleteOrder } from "../controllers/orders/delete-order.js";


export const ordersRouter = express.Router();

ordersRouter.get("/", getOrder);

ordersRouter.post("/", createOrder);

ordersRouter.put("/", updateOrder);

ordersRouter.delete("/", deleteOrder);
