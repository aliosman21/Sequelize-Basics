"use strict";
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Staffs", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         firstName: {
            type: Sequelize.STRING,
         },
         lastName: {
            type: Sequelize.STRING,
         },
         email: {
            type: Sequelize.STRING,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         /*  manager_id: {
            type: Sequelize.INTEGER,
            references: {
               model: "managers",
               key: "id",
            },
         }, */
      });
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("Staffs");
   },
};
