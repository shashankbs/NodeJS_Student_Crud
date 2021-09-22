import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private register_url = 'http://localhost:3000/register';
  private login_url = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {}

  register_post(data) {
    return this.http.post(this.register_url, data);
  }

  login_post(data) {
    return this.http.post(this.login_url, data);
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
