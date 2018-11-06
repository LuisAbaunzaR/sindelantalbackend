'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dishes = sequelize.define('Dishes', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: {type:DataTypes.STRING, allowNull:false},
    kind_food: {type:DataTypes.ENUM,values:["INTERNACIONAL","PIZZA","DESAYUNO","POSTRES","PANADERIA","MEXICANA","SALUDABLE","HAMBURGUESAS","ITALIANA","SUSHI","ASIATICA","ENSALADAS","AMERICANA","VEGANA","CHINA","COMIDA RAPIDA","ESPANOLA","LATINA"]},
    description: DataTypes.STRING,
    price: {type:DataTypes.DECIMAL,allowNull:false},
    quantity: DataTypes.STRING,
    photos: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Dishes.associate = function(models) {
    // associations can be defined here
    Dishes.belongsTo(models.Restaurants,{foreignKey:"restaurantId", as:"restaurant"})
  };
  return Dishes;
};