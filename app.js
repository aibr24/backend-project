const express = require("express");
let games = require("./data");
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

app.delete("/games/:gameId", (req, res) => {
  const { gameId } = req.params;
  const foundGame = games.find((game) => game.id === +gameId);
  if (foundGame) {
    games = games.filter((_game) => _game !== foundGame);
  } else {
    res.status(404).json({ message: "Not Found" });
  }

  res.status(204).end();
});
