const {Restaurants,Dishes,OrderDishes} = require("../models");

const createOrderDishes = async(req,res) =>{

    const orderdishes = await OrderDishes.create(req.body)
    .catch(e=>res.status(400).json(e))
    if (!orderdishes) res.status(400).json({message:"problems to create order dishes"})
    res.status(200).json(orderdishes)

}

module.exports={
createOrderDishes

}