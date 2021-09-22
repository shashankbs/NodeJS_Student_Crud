const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const studentRouter = require("./routers/studentRouter");
const User = require("./models/userModel");
const authRouter = require("./routers/authRouter");
const authMiddleware = require("./middleware/authMiddleware");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
  })
  .then((response) => {
    console.log("MongoDB Connected Successfully...");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

app.use(authRouter);
app.use(authMiddleware.verifyToken);
app.use("/student", studentRouter);

app.listen(3000, () => {
  console.log("Listening on port", process.env.PORT_NUMBER);
});
