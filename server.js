import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./src/routes/users.js";
import { foodRouter } from "./src/routes/food.js";
import { ordersRouter } from "./src/routes/orders.js";
import { categoryRouter } from "./src/routes/foodCategory.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/users", userRouter);

app.use("/foods", foodRouter);

app.use("/categories", categoryRouter)

app.use("/orders", ordersRouter);

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
