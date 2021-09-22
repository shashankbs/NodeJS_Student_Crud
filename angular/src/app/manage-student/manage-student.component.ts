import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student/student.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css'],
})
export class ManageStudentComponent implements OnInit {
  message: string;
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  studentForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
  });

  ngOnInit(): void {}

  addStudent() {
    console.log(this, this.studentForm.value);
    this.studentService
      .add_student(this.studentForm.value)
      .subscribe((data) => {
        console.log(data);
        this.snackBar.open('Added student', '', { duration: 2000 });
        this.router.navigate(['/students']);
      });
  }
}
