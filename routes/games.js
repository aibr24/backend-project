const express = require("express");
const {
  gameList,
  deleteGame,
  createGame,
  updateGame,
} = require("../controllers/gameControllers");
const router = express.Router();

router.get("/", gameList);

router.post("/", createGame);

router.put("/:gameId", updateGame);

router.delete("/:gameId", deleteGame);

module.exports = router;
