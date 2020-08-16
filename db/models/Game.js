const { Model, DataTypes } = require("sequelize");
// const { gameList } = require("../../controllers/gameControllers");
const db = require("../db.js");

class Game extends Model {}

Game.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
      validate: {
        min: 1,
      },
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
  }
);

module.exports = Game;
