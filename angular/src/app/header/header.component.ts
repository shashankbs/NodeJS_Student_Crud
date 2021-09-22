import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  tokenExists: boolean = !!localStorage.getItem('jwt');

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout_user();
  }
}
