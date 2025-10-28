import { User } from "../../model/user-model.js";

export const getUser = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};
