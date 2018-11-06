const verifyToken= require("../resolvers/verifyToken");

module.exports = async(req,res,next)=>{
    try{
        console.log("Este es el req headers")
        console.log(req.headers)
        let {authorization} = req.headers
       // let {level} =req.headers   aqui busco la etiqueta level y la asigno a req.headers
        let user = await verifyToken(authorization)
       
        if(!user) return res.status(400).json({"message":"token is invalid"})

        // se recibe todo el objeto user y se asigna a req.user
        req.user = user
        
       // req.level = level prueba para captural la etiqueta level de los headers
       // console.log(level)
            // next siempre debe de existir en un middleware que indica lo siguiente
        next();

    }catch(e){
        let {message}= e 
        return res.status(400).json({message})
    }


}