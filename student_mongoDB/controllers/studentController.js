const Student = require("../models/studentModel");

const get_all_students = (req, res) => {
  Student.find((err, data) => {
    if (err) {
      res.status(404).send("No students found");
    }
    console.log("Sending student details");
    res.status(200).send(data);
  });
};

const post_student = (req, res) => {
  const student = new Student({
    name: req.body.name,
    address: req.body.address,
  });
  student.save((err, data) => {
    if (err) {
      res.status(404).send("Could not create student ", err);
    }
    res.status(201).send(data);
  });
};

const get_student_id = (req, res) => {
  Student.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(404).send("No student found");
    }
    res.status(200).send(data);
  });
};

const edit_student_id = (req, res) => {
  Student.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, address: req.body.address },
    (err, data) => {
      if (err) {
        res.send("Could not delete student");
      }
      res.send(data);
    }
  );
};

const delete_student_id = (req, res) => {
  Student.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.send("Could not delete student");
    }
    res.send(data);
  });
};

module.exports = {
  get_all_students,
  post_student,
  get_student_id,
  edit_student_id,
  delete_student_id,
};
