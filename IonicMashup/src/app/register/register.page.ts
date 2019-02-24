import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = { fname: '', lname: '', email: '', password: '' };

  constructor() {
    this.resetuser();
  }

  ngOnInit() {
  }

  register() {
    let userInfo = {
      'firstname' : this.user.fname,
      'lastname' : this.user.lname,
      'username' : this.user.email,
      'password' : this.user.password
    }
    // localStorage supported
    if (window.localStorage) {
      localStorage.setItem(userInfo.username, JSON.stringify(userInfo));
      this.resetuser();
    }

  }
  resetuser() {
    this.user = { fname: '', lname: '', email: '', password: '' };

  }
}
