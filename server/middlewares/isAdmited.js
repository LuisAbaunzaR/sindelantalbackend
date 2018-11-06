const verifyPermision= require("../resolvers/verifyPermision");

module.exports = async(req,res,next)=>{
    try{
        console.log("Este es el req headers")
        console.log(req.headers)
        let {authorization} = req.headers

        let role = await verifyPermision(authorization)
       
        req.role = role
        console.log(role)
        if (role=="admin") {
            next();

        }else{
            return res.status(400).json("No tienes permiso de Administrador")
        }
     //if(!user) return res.status(400).json({"message":"token is invalid"})
        
      //  req.user = user
        

    }catch(e){
        let {message}= e 
        return res.status(400).json({message})
    }


}