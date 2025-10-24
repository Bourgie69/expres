import express from "express";
import { getOrder } from "../resolvers/orders/get-order.js";
import { createOrder } from "../resolvers/orders/create-order.js";
import { updateOrder } from "../resolvers/orders/update-order.js";
import { deleteOrder } from "../resolvers/orders/delete-order.js";


export const ordersRouter = express.Router();

ordersRouter.get("/", getOrder );

ordersRouter.post("/", createOrder );

ordersRouter.put("/", updateOrder);

ordersRouter.delete("/", deleteOrder);
