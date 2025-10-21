import express from "express";
import { router } from "./src/routes/users.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use('/users', router)


app.listen(PORT, () => {
  console.log(`Server working on: http://localhost:${PORT}`);
});
