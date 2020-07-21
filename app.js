const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const gameRoutes = require("./routes/games");

const app = express();
// // data
// let games = require("./data");
app.use(cors());
app.use(bodyParser.json());
app.use("/games", gameRoutes);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
// app.listen(8000, () => {
//   console.log("The application is running on localhost:8000");
// });

// app.get("/games", (req, res) => {
//   res.json(games);
// });

// app.post("/games", (req, res) => {
//   id = games[games.length - 1].id + 1;
//   const newGame = { id, ...req.body };
//   games.push(newGame);
//   res.status(201).json(newGame);
// });

// app.put("/games/:gameId", (req, res) => {
//   const { gameId } = req.params;
//   const foundGame = games.find((game) => game.id === +gameId);
//   if (foundGame) {
//     for (const key in foundGame) foundGame[key] = req.body[key];
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "Game Not Found" });
//   }
// });

// app.delete("/games/:gameId", (req, res) => {
//   const { gameId } = req.params;
//   const foundGame = games.find((game) => game.id === +gameId);
//   if (foundGame) {
//     games = games.filter((_game) => _game !== foundGame);
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "Not Found" });
//   }

//   res.status(204).end();
// });
