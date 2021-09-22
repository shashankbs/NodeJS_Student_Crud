import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  get_students_url = 'http://localhost:3000/student';

  constructor(private http: HttpClient) {}

  get_students() {
    return this.http.get(this.get_students_url);
  }

  add_student(data) {
    return this.http.post(this.get_students_url, data);
  }

  delete_student(id) {
    // console.log(this.get_students_url+'/'+id)
    return this.http.delete(this.get_students_url + '/' + id);
  }
}
