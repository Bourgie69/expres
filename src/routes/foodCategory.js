import express from "express";
import { getCategory } from "../resolvers/foodCategory/get-category.js";
import { createCategory } from "../resolvers/foodCategory/create-category.js";
import { updateCategory } from "../resolvers/foodCategory/update-category.js";
import { deleteCategory } from "../resolvers/foodCategory/delete-category.js";


export const categoryRouter = express.Router();

categoryRouter.get("/", getCategory );

categoryRouter.post("/", createCategory);

categoryRouter.put("/", updateCategory);

categoryRouter.delete("/", deleteCategory);
