const student = require("../models/student");

const student_details = (req, res) => {
  console.log("Will display all students here");
  student
    .fetch()
    .then(([row, fieldData]) => {
      res.status(200).send(row);
    })
    .catch((err) => {
      console.log(err);
    });
};

const add_student_details = (req, res) => {
  console.log("Inserting a student", req.body);
  student
    .insert(req.body.name, req.body.usn, req.body.address)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const studentById_details = (req, res) => {
  student
    .fetchById(req.params.id)
    .then(([rows, fieldData]) => {
      //console.log(data);
      res.send(rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

const studentById_delete = (req, res) => {
  student
    .deleteById(req.params.id)
    .then((data) => {
      console.log(data);
      res.send("Deleted successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  student_details,
  add_student_details,
  studentById_details,
  studentById_delete,
};
