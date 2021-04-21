var DataTypes = require("sequelize").DataTypes;
var _managers = require("./managers");
var _sequelizemeta = require("./sequelizemeta");
var _users = require("./users");

function initModels(sequelize) {
  var managers = _managers(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  users.belongsTo(managers, { as: "manager", foreignKey: "manager_id"});
  managers.hasMany(users, { as: "users", foreignKey: "manager_id"});

  return {
    managers,
    sequelizemeta,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
