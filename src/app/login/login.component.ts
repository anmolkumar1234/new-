// login.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor() { }

  login() {
    // Your login logic goes here
    console.log('Login form submitted');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
