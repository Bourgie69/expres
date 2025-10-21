import { users } from "./get-user.js";
import fs from 'fs'

export const updateUser = (req, res) => {
  const updatedUser = req.body;

  users = users.map((user) => (user.id === updatedUser.id ? updateUser : user));

  res.send("User updated successfully!");
};
