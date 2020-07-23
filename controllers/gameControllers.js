// let games = require("../data");
const { Game } = require("../db/models");

exports.gameList = async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (error) {
    console.log(`AINT NO ${error} BAD ENOUGH!`);
  }
};

exports.createGame = async (req, res) => {
  try {
    const newGame = await Game.create(req.body);
    res.status(201).json(newGame);
  } catch (error) {
    console.log("Creat Func -->", error);
  }
};

exports.updateGame = async (req, res) => {
  const { gameId } = req.params;
  try {
    const foundGame = await Game.findByPk(gameId);
    if (foundGame) {
      await foundGame.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Game Not Found" });
    }
  } catch (error) {
    console.log("Update Func --> ", error);
  }
};

exports.deleteGame = async (req, res) => {
  const { gameId } = req.params;
  try {
    const foundGame = await Game.findByPk(gameId);
    if (foundGame) {
      await foundGame.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Game Not Found" });
    }
  } catch (error) {
    console.log("Delete Func --> ", error);
  }
};
