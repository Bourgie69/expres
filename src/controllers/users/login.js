import { User } from "../../model/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try{
    const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "No input" });
  }

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email." });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ message: "Invalid password." });
  }

  const token = jwt.sign({ id: user._id, email: user.email }, "secret-key");
  res.status(200).json({ message: `User ${email} logged in!`, token });
  } catch(err){ 
    console.log(err);
    res.status(500).json({message: "Server error"})
  }
  

};
