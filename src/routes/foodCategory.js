import express from "express";
import { getCategory } from "../controllers/foodCategory/get-category.js";
import { createCategory } from "../controllers/foodCategory/create-category.js";
import { updateCategory } from "../controllers/foodCategory/update-category.js";
import { deleteCategory } from "../controllers/foodCategory/delete-category.js";

export const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);

categoryRouter.post("/", createCategory);

categoryRouter.put("/", updateCategory);

categoryRouter.delete("/", deleteCategory);
