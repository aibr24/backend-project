const Game = require("./Game");
const Publisher = require("./Publisher");
const User = require("./User");

Publisher.hasMany(Game, {
  as: "games",
  foreignKey: "publisherId",
  allowNull: false,
});
Game.belongsTo(Publisher, { as: "publisher", allowNull: false });

User.hasOne(Publisher, { as: "publisher", foreignKey: "userId" });
Publisher.belongsTo(User, { as: "user" });

module.exports = { Publisher, Game, User };
