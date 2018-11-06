const {Restaurants,Dishes} = require("../models");
const db = require("../models/index") 


const createDishes = async(req,res) => {
    
    try{
        const newDishes = await Dishes.create(req.body)
        if(!newDishes) res.status(400).json({"message":"Error al crear el platillo"})
        res.status(200).json(newDishes)
    }catch(e){
        return res.status(400).json(e)
    } 
}



const getAllDishes = async(req,res) => {
    let allDishes = await  Dishes.findAll({where:{},include:[
        {
            model:Restaurants,
            as:"restaurant"
        }
    ]})
    return res.status(200).json(allDishes)
}


const getOneDish = async(req,res) => {
    let oneDish = await Dishes.findOne({where:{id:req.params.id},include:[
        {
            model:Restaurants,
            as:"restaurant"
        }
    ]})
    return res.status(200).json(oneDish)
}

const findDish = async(req,res) => {
    let x =req.params.name
    let findDishes = await db.sequelize.query(
        `select * from "Dishes" where name like '%${x}%';`

    )
       
    
    return res.status(200).json(findDishes)
}


// const findDish = async(req,res) => {
//     let x =req.params.name
//     let findDishes = await Dishes.findAll({where:[`name like ?`, '%' + x + '%'],include:[
//         {
//             model:Restaurants,
//             as:"restaurant"
//         }
//     ]})
//     return res.status(200).json(findDishes)
// }

module.exports = {
    createDishes,
    getAllDishes,
    getOneDish,
    findDish

}