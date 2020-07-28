const { Model, DataTypes } = require("sequelize");
const db = require("../db.js");

class Publisher extends Model {}

Publisher.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
  }
);

module.exports = Publisher;
