"use strict";
const { Model } = require("sequelize");
/* const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("test", "root", "ali", {
   host: "localhost",
   dialect: "mysql",
}); */

module.exports = (sequelize, DataTypes) => {
   class User extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         // User.belongsTo(models.Manager);
         /* User.belongsTo(models.Manager, {
            foreignKey: "id",
            constraints: false,
         }); */
         /*  User.belongsTo(models.Manager, { foreignKey: "manager_id" }); */
      }
   }
   User.init(
      {
         firstName: DataTypes.STRING,
         lastName: DataTypes.STRING,
         manager_id: DataTypes.INTEGER,
      },
      {
         timestamps: false,
         sequelize,
         modelName: "User",
      }
   );
   //module.exports = User;
   return User;
};
