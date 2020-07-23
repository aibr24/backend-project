const { sequelize, Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "A619916a",
  database: "gameshopdb",
  dialect: "postgres",
  host: "localhost",
});

module.exports = db;
