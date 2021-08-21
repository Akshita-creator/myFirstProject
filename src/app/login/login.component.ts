import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Event , Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl('')
    })
  }

  login() {
    if((this.loginForm.get('username').value == 'administrator_1@yopmail.com' || this.loginForm.get('username').value == 'administrator_2@yopmail.com' || this.loginForm.get('username').value == 'administrator_3@yopmail.com') 
    && this.loginForm.get('password').value == 'Staging123$') {
      this.router.navigateByUrl('/conversation');
    }
  }

}
