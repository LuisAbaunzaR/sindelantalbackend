const {Users}= require("../models");
const jwt = require('jsonwebtoken');

const SECRET_KEY = "textorandom";

const tokenPrefix="JWT"

module.exports = (token)=>{

    if(!token) throw new Error ("No token provided")
    const [prefix,recivedToken]= token.split(' ');
    if (!recivedToken) throw new Error ("No token provided")

    if(prefix !=tokenPrefix) throw new Error ("Invalid header format")

    let payload= jwt.verify(recivedToken,SECRET_KEY)

    return payload.role




}