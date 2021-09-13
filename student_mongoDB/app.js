const express = require("express");
const mongoose = require("mongoose");
const studentRouter = require("./routers/studentRouter");
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
    console.log("Error connecting to the database");
  });

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", studentRouter);

app.listen(process.env.PORT_NUMBER, () => {
  console.log("Listening on port", process.env.PORT_NUMBER);
});
