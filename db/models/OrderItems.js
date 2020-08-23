const { Model, DataTypes } = require("sequelize");
const db = require("../db.js");

class OrderItems extends Model {}

OrderItems.init(
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
  }
);

module.exports = OrderItems;
