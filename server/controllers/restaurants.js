const {Restaurants,Users,Dishes} = require("../models");

const createRestaurant = async(req,res) =>{

    try{
        console.log(req.body.userId)
        console.log(req.user.id) //como trae el usuario 

        req.body.userId = req.user.id  
       // req.body.logo = req.level     prueba para mandar una etiqueta level desde los headers e insertarlos en campo logo
        const restaurant = await Restaurants.create(req.body)
        if(!restaurant) res.status(400).json({"message":"Error al crear el Restaurante"})
        return res.status(201).json(restaurant)

    }catch(e){
        console.log(e);
        return res.status(400).json(e)
    }
}

const getAllRestaurants = async(req,res) => {
    let allRestaurants = await Restaurants.findAll({where:{},include:[
        {
            model:Users,
            as:"user"
        }
    ]})
    return res.status(200).json(allRestaurants);
}

const getOneRestaurants = async(req,res) => {
    let oneRestaurant = await Restaurants.findOne({where:{id:req.params.id},include:[
        {
            model:Users,
            as:"user"
        }
    ]})
    return res.status(200).json(oneRestaurant)
}

const getOneRestaurantsDishes = async(req,res) => { 
    let OneRestaurantsDishes = await Restaurants.findOne({where:{id:req.params.id},
        include:[
            {
                model:Dishes,
                as:"dishes"
            }
        
  
]})
    return res.status(200).json(OneRestaurantsDishes)
}



module.exports = {
   createRestaurant,
   getAllRestaurants,
   getOneRestaurants,
   getOneRestaurantsDishes
}