import { Food } from "../../model/food-model.js"

export const getFood = async (req, res) => {
    try {
        const food = await Food.find();
        res.json(food)
    } catch(err){
        res.status(500).json({msg: err.message})
    }
}