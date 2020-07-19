const express = require("express");
const games = require("./data");
const cors = require("cors");

//data
const app = express();

app.use(cors());

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});

app.get("/games", (req, res) => {
  res.json(games);
});
