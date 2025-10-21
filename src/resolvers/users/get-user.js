import fs from 'fs'
let data = fs.readFileSync('users.json', 'utf8')

export let users = JSON.parse(data)

export const getUser = (req, res) => {
    res.status(200).json(users)
}