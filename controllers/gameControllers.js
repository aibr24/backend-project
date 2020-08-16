// let games = require("../data");
const { Game, Publisher } = require("../db/models");

exports.fetchGame = async (gameId, next) => {
  try {
    const game = await Game.findByPk(gameId, {
      include: {
        model: Publisher,
        as: "publisher",
        attributes: ["userId"],
      },
    });
    return game;
  } catch (error) {
    next(error);
  }
};

exports.gameList = async (req, res, next) => {
  try {
    const games = await Game.findAll({
      attributes: { exclude: ["publisherId"] },
      include: {
        model: Publisher,
        as: "publisher",
        attributes: ["name"],
      },
    });
    res.json(games);
  } catch (error) {
    next(error);
  }
};

exports.updateGame = async (req, res, next) => {
  try {
    if (req.user.id === req.game.publisher.userId) {
      if (req.file) {
        req.body.image = `${req.protocol}://${req.get("host")}/media/${
          req.file.filename
        }`;
      }
      await req.game.update(req.body);
      res.status(204).end();
    } else {
      const err = new Error("Unauthorized");
      err.status = 401;
      next(err);
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteGame = async (req, res, next) => {
  try {
    if (req.user.id === req.publisher.userId) {
      await req.game.destroy(req.body);
      res.status(204).end();
    } else {
      const err = new Error("Unauthorized");
      err.status = 401;
      next(err);
    }
  } catch (error) {
    next(error);
  }
};
