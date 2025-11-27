import express from "express";
import { getUser } from "../controllers/users/get-user.js";
import { createUser } from "../controllers/users/create-user.js";
import { updateUser } from "../controllers/users/update-user.js";
import { deleteUser } from "../controllers/users/delete-user.js";
import { login } from "../controllers/users/login.js";
import { getUserInfo } from "../controllers/users/get-user-info.js";


export const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.get("/me", getUserInfo)

userRouter.post("/", createUser);

userRouter.put("/", updateUser);

userRouter.delete("/", deleteUser);

userRouter.post("/login", login)
