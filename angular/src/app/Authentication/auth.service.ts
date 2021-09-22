import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private register_url = 'http://localhost:3000/register';

  constructor(private http: HttpClient) {}

  register_post(data) {
    return this.http.post(this.register_url, data);
  }

  log_user(token) {
    localStorage.setItem('jwt', token);
  }

  logout_user() {
    localStorage.removeItem('jwt');
  }

  loggedIn() {
    return !!localStorage.getItem('jwt');
  }
}
