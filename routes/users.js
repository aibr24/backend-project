const express = require("express");

const router = express.Router();

//methods imported
const { register } = require("../controllers/userControllers");

router.post("", register);

module.exports = router;
