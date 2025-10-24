import { User } from "../../model/user-model.js";


export const createUser = async (req, res) => {
  const newUser = await User.create(req.body);

  res.status(200).json(newUser);
};
