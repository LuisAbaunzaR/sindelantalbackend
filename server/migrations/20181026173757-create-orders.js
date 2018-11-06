'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      date: {
        type: Sequelize.DATE
      },
      hours: {
        type: Sequelize.TIME
      },
      total: {
        type: Sequelize.DECIMAL
      },
      notes: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING
      },
      address_to_deliver1: {
        type: Sequelize.STRING
      },
      address_to_deliver2: {
        type: Sequelize.STRING
      },
      country_to_deliver: {
        type: Sequelize.STRING
      },
      city_to_deliver: {
        type: Sequelize.STRING
      },
      zip_code_to_deliver: {
        type: Sequelize.STRING
      },
      lat_to_deliver: {
        type: Sequelize.FLOAT
      },
      long_to_deliver: {
        type: Sequelize.FLOAT
      },
      status: {
        type: Sequelize.ENUM,
        values: ["PENDIENTE","PAGADA","CANCELADA"]
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
    return queryInterface.dropTable('Orders');
  }
};