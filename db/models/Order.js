const { Model, DataTypes } = require("sequelize");
const db = require("../db.js");

class Order extends Model {}

Order.init(
  {},
  {
    sequelize: db,
  }
);

module.exports = Order;
