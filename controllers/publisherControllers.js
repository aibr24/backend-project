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
          attributes: ["name"],
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
    req.body.image = `${req.protocol}://${req.get("host")}/media/${
      req.file.filename
    }`;
    const newPublisher = await Publisher.create(req.body);
    res.status(201).json(newPublisher);
  } catch (error) {
    next(error);
  }
};

exports.updatePublisher = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/media/${
        req.file.filename
      }`;
    }
    await req.publisher.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.deletePublisher = async (req, res, next) => {
  try {
    await req.Publisher.destroy(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.createGame = async (req, res, next) => {
  console.log(req);
  try {
    req.body.image = `${req.protocol}://${req.get("host")}/media/${
      req.file.filename
    }`;
    req.body.publisherId = req.publisher.id;
    const newGame = await Game.create(req.body);
    res.status(201).json(newGame);
  } catch (error) {
    next(error);
  }
};
