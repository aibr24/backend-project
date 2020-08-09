const { User } = require("../db/models");
const bcrypt = require("bcrypt");

exports.register = async (req, res, next) => {
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    const newUser = await User.create(req.body);
    res.status(201).json({ message: "User Registered" });
  } catch (error) {
    next(error);
  }
};
