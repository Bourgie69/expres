import express from "express";
import { createFood } from "../controllers/food/create-food.js";
import { getFood } from "../controllers/food/get-food.js";
import { updateFood } from "../controllers/food/update-food.js";
import { deleteFood } from "../controllers/food/delete-food.js";



export const foodRouter = express.Router();

foodRouter.get("/", getFood);

foodRouter.post("/", createFood);

foodRouter.put("/", updateFood);

foodRouter.delete("/", deleteFood);
