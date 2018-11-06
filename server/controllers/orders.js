const {Users,Restaurants,Dishes,OrderDishes,Orders} = require("../models");

const createOrder = async(req,res)=>{

    req.body.userId=req.user.id 
    const order= await Orders.create(req.body)
    .catch(e=>res.status(400).json(e))
    if (!order) res.status(400).json({message:"problems to create order"})

    res.status(200).json({message:"order created",id:order.id})

}

const getAllOrders = async(req,res) =>{
    
    let allOrders = await Orders.findAll({where:{},include:[
      
        {
            model:OrderDishes,
          // as:"dishes",
            include:[
                {
                    model:Dishes
                }
            ]
        },
        
    ]})
    return res.status(200).json(allOrders)
    
}

const getOneOrders = async(req,res) =>{
    
    let oneOrder = await Orders.findOne({where:{id:req.params.id},include:[
        {
            model:OrderDishes,
            include:[
                {
                    model:Dishes
                }
            ]
        },
    ]})

        var cant_tot =0
        var gran_total=0
        var item_tot=0
    let cantidad = oneOrder.OrderDishes.map(function (cont) {

         //console.log("trallendo dishe price")
       //  console.log(cont.Dish.price) 
         item_tot += cont.quantity_dishes 
         cant_tot =cont.quantity_dishes * cont.Dish.price
         gran_total +=cant_tot
         console.log(item_tot)
         console.log(cant_tot)
         console.log(gran_total)
            })
        //    console.log(cant_tot)
    
    // // let cantidad = oneOrder.OrderDishes[0].quantity_dishes
    // //     let precio = oneOrder.OrderDishes[0].Dish.price
    // //     let total = cantidad*precio
    // //     console.log(total)
    return res.status(200).json({"orden":oneOrder,"total de items":item_tot,"con Gran Total de:":gran_total})
        
}

module.exports={
    createOrder,
    getAllOrders,
    getOneOrders
}