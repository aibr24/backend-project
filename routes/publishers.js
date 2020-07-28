const express = require("express");

//controllers
const {
  createGame,
  publisherList,
  deletePublisher,
  createPublisher,
  updatePublisher,
  fetchPublisher,
} = require("../controllers/publisherControllers");

//Middleware
const upload = require("../middleware/multer");

const router = express.Router();

router.param("publisherId", async (req, res, next, publisherId) => {
  const publisher = await fetchPublisher(publisherId, next);
  if (publisher) {
    req.publisher = publisher;
    next();
  } else {
    const err = new Error("Publisher Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", publisherList);
router.post("/", upload.single("image"), createPublisher);

// cookie create
router.post("/:publisherId/games", upload.single("image"), createGame);

router.put("/:publisherId", upload.single("image"), updatePublisher);

router.delete("/:publisherId", deletePublisher);

module.exports = router;
