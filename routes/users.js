const express = require("express");

const router = express.Router();

//methods imported
const { register, signin } = require("../controllers/userControllers");
const passport = require("passport");

router.post("/register", register);
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);

module.exports = router;
