import jwt from "jsonwebtoken"

export const getUserInfo = (req, res) => {
    const token = req.headers.authorization

    if(!token) return res.status(401).json({error: "no token"})

    try{
        const decoded = jwt.verify(token, "secret-key")

        return res.json({user: decoded})
    } catch(err){
        console.log(err)
        return res.status(401).json({error: 'invalid token'})
    }
}