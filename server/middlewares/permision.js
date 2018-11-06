

module.exports = async(req,res,next)=>{
    try{
        console.log("Este es el req headers")
        console.log(req.headers)
        let {rule} = req.headers
       // let {level} =req.headers   aqui busco la etiqueta level y la asigno a req.headers
       if (rule==="admin") {
            next();
       } else {
        return res.status(400).json({"message":"no tiene permisos para realizar esa accion"})
       }
      
  

    }catch(e){
        let {message}= e 
        return res.status(400).json({message})
    }


}