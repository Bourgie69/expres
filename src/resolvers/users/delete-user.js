import { users } from "./get-user.js";

export const deleteUser = (req, res) => {
    const id = String(req.params.id);

    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        return res.status(404).send('User not found');
    }

    users.splice(index, 1); 

    res.send('User deleted successfully!');
};
