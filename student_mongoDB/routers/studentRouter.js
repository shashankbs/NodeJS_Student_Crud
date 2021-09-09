const express=require('express');
const studentRouter=express.Router();
const studentController=require('../controllers/studentController');

studentRouter.route('/')
.get(studentController.get_all_students)
.post(studentController.post_student);

studentRouter.route('/:id')
.get(studentController.get_student_id)
.put(studentController.edit_student_id)
.delete(studentController.delete_student_id);

module.exports=studentRouter;