import express from "express";
import { getUser } from "../resolvers/users/get-user.js";
import { createUser } from "../resolvers/users/create-user.js";
import { updateUser } from "../resolvers/users/update-user.js";
import { deleteUser } from "../resolvers/users/delete-user.js";
import { login } from "../resolvers/users/login.js";

export const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.post("/", createUser);

userRouter.put("/", updateUser);

userRouter.delete("/", deleteUser);

userRouter.post("/login", login)
