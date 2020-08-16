const express = require("express");

//controllers
const {
  gameList,
  deleteGame,
  updateGame,
  fetchGame,
} = require("../controllers/gameControllers");

//Middleware
const upload = require("../middleware/multer");
const passport = require("passport");

const router = express.Router();

router.param("gameId", async (req, res, next, gameId) => {
  const game = await fetchGame(gameId, next);
  if (game) {
    req.game = game;
    next();
  } else {
    const err = new Error("Game Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", gameList);

// router.post("/", upload.single("image"), createGame);

router.put(
  "/:gameId",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  updateGame
);

router.delete("/:gameId", deleteGame);

module.exports = router;
