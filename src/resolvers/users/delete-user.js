import { users } from "./get-user.js";

export const deleteUser  = (req, res) => {
    const id = req.params.id

    users = users.filter(user => user.id != id);
    
    res.send('User deleted Successfuly!')
}