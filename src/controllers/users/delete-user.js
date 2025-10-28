import { User } from "../../model/user-model.js";

export const deleteUser = async (req, res) => {
    const id = req.body.id
    const deletedUser = await User.findByIdAndDelete(id)

    res.status(200).json(deletedUser)
};
