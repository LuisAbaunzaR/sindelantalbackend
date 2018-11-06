
const {Users,Orders} = require('../models')
const createToken = require('../resolvers/createToken') 

const signUp= async(req,res)=>{

    let user = await Users.create(req.body)

    if(!user) res.status(400).json({message:"Couldn't create user"})

    return res.status(201).json({message:"User created",id:user.id})
}
// nuevo
const logIn = async(req,res)=>{

    let user=await Users.find({where:{email:req.body.email}})
    if(!user) return res.status(404).json({"message":"user does not exist"})

    user.comparePassword(req.body.password).then(async(result)=>{
        if(result){
            let token= await createToken(user)
            return  res.status(200).json({"message":"user logged successfully",token})
        }else{
            return res.status(400).json({"message":"password is incorrect"})
        }
    }).catch((err)=> console.log(err));
}

const me = async(req,res) =>{
    const profile= await Users.findOne(
        {where:{id:req.user.id},
        attributes:{exclude:["password"]},
        include:[
            {
                model:Orders,
                as:"orders"
            }
            ]       
        }
    )  
    if(!profile) res.status(404).json({message:"user not found"})  
    res.status(200).json(profile)
}

const getAllUsers = async(req,res) =>{
    let allUsers = await Users.findAll({where:{}})
    return res.status(200).json(allUsers)
}


module.exports={
    signUp,
     logIn,
     me,
     getAllUsers

}