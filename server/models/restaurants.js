'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurants = sequelize.define('Restaurants', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: {type:DataTypes.STRING,
      allowNull:false},
    kind: {type:DataTypes.ENUM,values:["INTERNACIONAL","PIZZA","DESAYUNO","POSTRES","PANADERIA","MEXICANA","SALUDABLE","HAMBURGUESAS","ITALIANA","SUSHI","ASIATICA","ENSALADAS","AMERICANA","VEGANA","CHINA","COMIDA RAPIDA","ESPANOLA","LATINA"]},
    description: DataTypes.STRING,
    logo: DataTypes.STRING,
    tel: DataTypes.STRING,
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT
  }, {});
  Restaurants.associate = function(models) {
    // associations can be defined here

    Restaurants.belongsTo(models.Users,{foreignKey:"userId", as:"user"})
    Restaurants.hasMany(models.Dishes,{foreignKey:"restaurantId", as:"dishes"})
    Restaurants.hasMany(models.Orders,{foreignKey:"restaurantId",as:"orders"})



  };
  return Restaurants;
};