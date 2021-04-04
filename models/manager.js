"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Manager extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         //Manager.hasOne(models.Staff, { foreignKey: "Staff_id" });
         Manager.belongsTo(models.User);
      }
   }
   Manager.init(
      {
         firstName: DataTypes.STRING,
         lastName: DataTypes.STRING,
         email: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "Manager",
      }
   );
   return Manager;
};
