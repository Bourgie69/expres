import express from "express";
import { createFood } from "../controllers/food/create-food.js";
import { getFood } from "../controllers/food/get-food.js";
import { updateFood } from "../controllers/food/update-food.js";
import { deleteFood } from "../controllers/food/delete-food.js";
import { getFoodByCategory } from "../controllers/food/get-foodByCategory.js";



export const foodRouter = express.Router();

foodRouter.get("/", getFood);

foodRouter.get("/:id", getFoodByCategory)

foodRouter.post("/", createFood);

foodRouter.patch("/", updateFood);

foodRouter.delete("/", deleteFood);
