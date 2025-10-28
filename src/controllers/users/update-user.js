import { User } from "../../model/user-model.js";

export const updateUser = async (req, res) => {
  const id = req.body.id;
  const updatedUser = await User.findByIdAndUpdate(id, {
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
  });

  res.status(200).json(updatedUser);
};
