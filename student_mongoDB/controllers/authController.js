const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const create_token = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const login_post = (req, res) => {
  console.log(req.body.username + "" + req.body.password);
};

const register_post = async (req, res) => {
  try {
    const email = req.body.email;
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(req.body.password, salt);
    const user = await User.create({
      email: email,
      password: password,
    });
    const token = create_token(user._id);
    res.status(201).json({
      user: user.email,
      jwt: token,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  login_post,
  register_post,
};
