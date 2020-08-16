const { sequelize, Sequelize } = require("sequelize");

// const db = new Sequelize({
//   username: "postgres",
//   password: "A619916a",
//   database: "gameshopdb",
//   dialect: "postgres",
//   host: "localhost",
// });

const db = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: "postgres",
      logging: false,
    })
  : new Sequelize({
      username: "postgres",
      password: "A619916a",
      database: "gameshopdb",
      dialect: "postgres",
      host: "localhost",
      logging: false,
    });
module.exports = db;
