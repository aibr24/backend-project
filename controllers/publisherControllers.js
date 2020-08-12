const { Publisher, Game } = require("../db/models");

exports.fetchPublisher = async (publisherId, next) => {
  try {
    const publisher = await Publisher.findByPk(publisherId);
    return publisher;
  } catch (error) {
    next(error);
  }
};

exports.publisherList = async (req, res, next) => {
  try {
    const publishers = await Publisher.findAll({
      include: [
        {
          model: Game,
          as: "games",
          attributes: ["id"],
        },
      ],
    });
    res.json(publishers);
  } catch (error) {
    next(error);
  }
};

exports.createPublisher = async (req, res, next) => {
  try {
    const foundPublisher = await Publisher.findOne({
      where: { userId: req.user.id },
    });
    if (foundPublisher) {
      const err = new Error("Publisher Already Exists");
      err.status = 400;
      next(err);
    }
    req.body.image = `${req.protocol}://${req.get("host")}/media/${
      req.file.filename
    }`;
    req.body.userId = req.user.id;
    const newPublisher = await Publisher.create(req.body);
    res.status(201).json(newPublisher);
  } catch (error) {
    next(error);
  }
};

exports.updatePublisher = async (req, res, next) => {
  try {
    if (req.user.role === "admin" || req.user.id === req.publisher.userId) {
      if (req.file) {
        req.body.image = `${req.protocol}://${req.get("host")}/media/${
          req.file.filename
        }`;
      }
      await req.publisher.update(req.body);
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

exports.deletePublisher = async (req, res, next) => {
  try {
    if (req.user.role === "admin" || req.user.id === req.publisher.userId) {
      await req.publisher.destroy(req.body);
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

// Game Create
exports.createGame = async (req, res, next) => {
  console.log(req);
  try {
    if (req.user.id === req.publisher.userId) {
      req.body.image = `${req.protocol}://${req.get("host")}/media/${
        req.file.filename
      }`;
      req.body.publisherId = req.publisher.id;
      const newGame = await Game.create(req.body);
      res.status(201).json(newGame);
    } else {
      const err = new Error("Unauthorized");
      err.status = 401;
      next(err);
    }
  } catch (error) {
    next(error);
  }
};
