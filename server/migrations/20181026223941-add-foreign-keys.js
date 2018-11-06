'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    queryInterface.addColumn(
      "Restaurants",
      "userId",{
        type:Sequelize.UUID,
        references:{
          model:'Users',
          key:"id"
        }
      }
    )
    queryInterface.addColumn(
      "Dishes",
      "restaurantId",{
        type:Sequelize.UUID,
        references:{
          model:'Restaurants',
          key:"id"
        }
      }
    )
    queryInterface.addColumn(
      "Orders",
      "restaurantId",{
        type:Sequelize.UUID,
        references:{
          model:'Restaurants',
          key:"id"
        }
      }
    )
    queryInterface.addColumn(
      "Orders",
      "userId",{
        type:Sequelize.UUID,
        references:{
          model:'Users',
          key:"id"
        }
      }
    )
    queryInterface.addColumn(
      "OrderDishes",
      "orderId",{
        type:Sequelize.UUID,
        references:{
          model:'Orders',
          key:"id"
        }
      }
    )
    queryInterface.addColumn(
      "OrderDishes",
      "dishId",{
        type:Sequelize.UUID,
        references:{
          model:'Dishes',
          key:"id"
        }
      }
    )
  },




  

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
