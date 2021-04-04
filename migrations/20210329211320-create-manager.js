"use strict";
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Managers", {
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
         user_id: {
            type: Sequelize.INTEGER,
            references: {
               model: "users",
               key: "id",
            },
            onDelete: "CASCADE",
         },
      });
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("Managers");
   },
};
