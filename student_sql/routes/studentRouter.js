const express = require("express");
const studentRouter = express.Router();
const student = require("../models/student");
const studentController = require("../controllers/studentController");

studentRouter
  .route("/")
  .get(studentController.student_details)
  .post(studentController.add_student_details);

studentRouter
  .route("/:id")
  .get(studentController.studentById_details)
  .delete(studentController.studentById_delete);

module.exports = studentRouter;
