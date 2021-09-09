const express = require("express");
const cors = require("cors");

const app = express();

const studentRouter = require("./routes/studentRouter");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", studentRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
