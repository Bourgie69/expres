import { User } from "../../model/user-model.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { username, password, email } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  res.status(200).json(newUser);
};
