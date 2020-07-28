const Game = require("./Game");
const Publisher = require("./Publisher");

Publisher.hasMany(Game, {
  as: "games",
  foreignKey: "publisherId",
  allowNull: false,
});
Game.belongsTo(Publisher, { as: "publisher", allowNull: false });

module.exports = { Publisher, Game };
