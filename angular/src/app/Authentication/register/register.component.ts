import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  private token;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  registerForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  registerUser() {
    this.authService
      .register_post(this.registerForm.value)
      .subscribe((data) => {
        this.snackBar.open('Registered successfully', '', { duration: 2000 });
        this.token = data;
        this.authService.log_user(this.token.jwt);
        this.router.navigate(['/students']);
      });
  }
}
