'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    date: { type: DataTypes.DATE, defaultValue: sequelize.NOW},
    hours: { type:DataTypes.TIME, defaultValue: sequelize.NOW},
    total: DataTypes.DECIMAL,
    notes: DataTypes.STRING,
    tel: DataTypes.STRING,
    address_to_deliver1: DataTypes.STRING,
    address_to_deliver2: DataTypes.STRING,
    country_to_deliver: DataTypes.STRING,
    city_to_deliver: DataTypes.STRING,
    zip_code_to_deliver: DataTypes.STRING,
    lat_to_deliver: DataTypes.FLOAT,
    long_to_deliver: DataTypes.FLOAT,
    status: {type:DataTypes.ENUM,values:["PENDIENTE","PAGADA","CANCELADA"]}
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
    Orders.belongsTo(models.Users,{foreignKey:"userId", as:"user"})
    Orders.belongsTo(models.Restaurants,{foreignKey:"restaurantId"})
    Orders.hasMany(models.OrderDishes,{foreignKey:"orderId"})
  };
  return Orders;
};