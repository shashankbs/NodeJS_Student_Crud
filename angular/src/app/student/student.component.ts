import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: any;
  displayedColumns: string[] = ['id', 'name', 'address', 'actions'];

  constructor(
    private studentService: StudentService,
    private sb: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.studentService.get_students().subscribe((data) => {
      this.students = data;
    });
  }

  deleteStudent(id) {
    console.log(id);
    this.studentService.delete_student(id).subscribe((data) => {
      this.sb.open('Deleted student', 'Dismiss', { duration: 2000 });
      this.ngOnInit();
    });
  }
}
