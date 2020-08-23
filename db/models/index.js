const Game = require("./Game");
const Publisher = require("./Publisher");
const User = require("./User");
const Order = require("./Order");
const OrderItems = require("./OrderItems");

Publisher.hasMany(Game, {
  as: "games",
  foreignKey: "publisherId",
  allowNull: false,
});
Game.belongsTo(Publisher, { as: "publisher", allowNull: false });

User.hasOne(Publisher, { as: "publisher", foreignKey: "userId" });
Publisher.belongsTo(User, { as: "user" });

User.hasMany(Order, { as: "orders", foreignKey: "userId" });
Order.belongsTo(User, { as: "user" });

Order.belongsToMany(Game, { through: OrderItems, foreignKey: "orderId" });
Game.belongsToMany(Order, { through: OrderItems, foreignKey: "gameId" });

module.exports = { Publisher, Game, User, Order, OrderItems };
