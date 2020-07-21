let games = require("../data");

exports.gameList = (req, res) => {
  res.json(games);
};

exports.createGame = (req, res) => {
  id = games[games.length - 1].id + 1;
  const newGame = { id, ...req.body };
  games.push(newGame);
  res.status(201).json(newGame);
};

exports.updateGame = (req, res) => {
  const { gameId } = req.params;
  const foundGame = games.find((game) => game.id === +gameId);
  if (foundGame) {
    for (const key in foundGame) foundGame[key] = req.body[key];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Game Not Found" });
  }
};

exports.deleteGame = (req, res) => {
  const { gameId } = req.params;
  const foundGame = games.find((game) => game.id === +gameId);
  if (foundGame) {
    games = games.filter((_game) => _game !== foundGame);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Not Found" });
  }

  res.status(204).end();
};
