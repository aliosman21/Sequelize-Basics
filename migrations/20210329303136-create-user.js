"use strict";
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Users", {
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
         manager_id: {
            type: Sequelize.INTEGER,
            references: {
               model: "managers",
               key: "id",
            },
            onDelete: "CASCADE",
         },
      });
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("Users");
   },
};
