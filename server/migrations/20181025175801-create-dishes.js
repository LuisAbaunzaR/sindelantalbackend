'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Dishes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
       
      },
      kind_food: {
        type: Sequelize.ENUM,
        values:["INTERNACIONAL","PIZZA","DESAYUNO","POSTRES","PANADERIA","MEXICANA","SALUDABLE","HAMBURGUESAS","ITALIANA","SUSHI","ASIATICA","ENSALADAS","AMERICANA","VEGANA","CHINA","COMIDA RAPIDA","ESPANOLA","LATINA"]
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
        
      },
      quantity: {
        type: Sequelize.STRING
      },
      photos: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Dishes');
  }
};