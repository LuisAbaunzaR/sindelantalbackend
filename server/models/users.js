'use strict';
const bcrypt= require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id:{
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name:{  
      type: DataTypes.STRING,
      allowNull: false
        },
    lastname:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      //unique:true,
      validate:{
        isEmail:true,
        notEmpty:{
          args:true,
          msg:"Email must be provided"
        }
      },
     
    },
    password: DataTypes.STRING,
    role: {type:DataTypes.ENUM,values:["admin","manager","general"]},
    gender: {type:DataTypes.ENUM,values:["M","F"]},
    birth_date: DataTypes.DATE,
    paypal_id: DataTypes.STRING,
    type: {type:DataTypes.ENUM,values:["guest","owner","both"]},

  }, {});

  let cryptPassword=(password)=>{
    return new Promise((resolve,reject)=>{
      bcrypt.genSalt(10,(err,salt)=>{
        if(err) reject(err)
        bcrypt.hash(password,salt,(err,new_hash)=>{
            if(err)reject(err)
            resolve(new_hash)
        })
      })
    })
  }

  Users.beforeCreate((user,options)=>{
      return cryptPassword (user.password).then((new_hash)=>{
        user.password = new_hash
      }).catch(e => console.log(e))
  })

 //codigo para comparar el password almacenado con el insertado(testpassword)
 Users.prototype.comparePassword = function (testPassword) {
  console.log(testPassword)
  let password=this.password
  console.log(password)
  return new Promise(function(resolve,reject){
    bcrypt.compare(testPassword,password,function(err,result){
      if(err) reject(err)
      resolve(result)

    })
  })
}


  Users.associate = function(models) {
    // associations can be defined here
    Users.hasMany(models.Restaurants,{foreignKey:"userId"})
    Users.hasMany(models.Orders,{foreignKey:"userId",as:"orders"})
  };
  return Users;
};