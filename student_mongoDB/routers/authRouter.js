const express = require("express");
const facebookStratergy = require("passport-facebook").Strategy;

const authRouter = express.Router();

authRouter.route("/").get();

module.exports = authRouter;
