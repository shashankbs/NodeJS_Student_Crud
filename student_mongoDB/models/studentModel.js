const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  address: String,
});

const Students = mongoose.model("Student", StudentSchema);

module.exports = Students;
