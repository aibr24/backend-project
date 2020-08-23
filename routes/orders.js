const express = require("express");

const router = express.Router();

const { checkout } = require("../controllers/orderControllers");
const passport = require("passport");

router.post(
  "/checkout",
  passport.authenticate("jwt", { session: false }),
  checkout
);

module.exports = router;
