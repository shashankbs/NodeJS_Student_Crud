import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  token;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  ngOnInit(): void {}

  loginUser() {
    this.authService.login_post(this.loginForm.value).subscribe(
      (data) => {
        this.token = data;
        this.authService.log_user(this.token.jwt);
        this.router.navigate(['/students']);
      },
      (err) => {
        this.snackBar.open('Please check credentials', '', { duration: 2000 });
        this.loginForm.reset();
      }
    );
  }
}
