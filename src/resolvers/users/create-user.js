import { users } from "./get-user.js";
import fs from 'fs'
import path from "path";

const usersFilePath = path.resolve('users.json')

export const createUser = (req, res) => {
    const newUser = req.body

    users.push(...newUser)

    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
        if(err){
            console.error('Error: ', err)
            return res.status(500).json({message: 'Failed'})
        }
        res.status(201).json(newUser)
    })
}