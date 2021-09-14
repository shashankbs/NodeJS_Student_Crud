const express = require("express");
const mongoose = require("mongoose");
const studentRouter = require("./routers/studentRouter");
require("dotenv").config();

const app = express();

mongoose
  .connect("mongodb://localhost:27017/studentDB", {
    useNewUrlParser: true,
  })
  .then((response) => {
    console.log("MongoDB Connected Successfully...");
  })
  .catch((err) => {
    console.log("Error connecting to the database");
  });

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", studentRouter);

app.listen(3000, () => {
  console.log("Listening on port", 3000);
});
