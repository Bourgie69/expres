import { Food } from "../../model/food-model.js"

export const getFoodByCategory = async (req, res) => {
    try{
        const foods = await Food.find({category: req.params.id})
        res.status(200).json(foods)
    } catch(err){
        res.status(500).json({message: "server error"})
    }
}