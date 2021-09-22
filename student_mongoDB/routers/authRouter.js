const express = require("express");
const passport = require("passport");

const authController = require("../controllers/authController");
//const FacebookStrategy = require("passport-facebook").Strategy;

const authRouter = express.Router();

authRouter.route("/register").post(authController.register_post);
authRouter.route("/login").post(authController.login_post);

//facebook authentication
// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.FACEBOOK_APP_ID,
//       clientSecret: process.env.FACEBOOK_APP_SECRET,
//       callbackURL: "http://localhost:3000/auth/facebook/students",
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//         return cb(err, user);
//       });
//     }
//   )
// );

// authRouter.route("/auth/facebook").get(passport.authenticate("facebook"));

// authRouter.route("/auth/facebook/students");
// get(
//   passport.authenticate("facebook", { failureRedirect: "/login" }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect("/students");
//   }
// );

module.exports = authRouter;
