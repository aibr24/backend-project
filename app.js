const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const gameRoutes = require("./routes/games");
const db = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/games", gameRoutes);

const run = async () => {
  try {
    await db.sync();

    console.log("Connection to DB Succs");
  } catch (error) {
    console.log("Connection to DB No Succs", error);
  }
  app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};
run();
