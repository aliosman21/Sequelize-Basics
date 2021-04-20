"use strict";
const { Model } = require("sequelize");
/* const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("test", "root", "ali", {
   host: "localhost",
   dialect: "mysql",
}); */

module.exports = (sequelize, DataTypes) => {
   class Manager extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */

      static associate(models) {
         // Manager.hasOne(models.User, { foreignKey: "user_id" });
         /*   Has many association*/
         Manager.hasMany(models.User, {
            foreignKey: "manager_id",
         });
      }
   }
   Manager.init(
      {
         firstName: DataTypes.STRING,
         lastName: DataTypes.STRING,
         // user_id: DataTypes.INTEGER,
      },
      {
         timestamps: false,
         sequelize,
         modelName: "Manager",
      }
   );
   // module.exports = Manager;
   return Manager;
};
