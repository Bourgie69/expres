import { User } from "../../model/user-model.js";

export const updateUser = async (req, res) => {
  const id = req.body.id;
  const updatedUser = await User.findByIdAndUpdate(id, {
    username: req.body.username,
  });

  res.status(200).json(updatedUser);
};
