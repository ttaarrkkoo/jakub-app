import { Component, Input, OnInit } from '@angular/core';
import { LoginDto } from '../types';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
@Input() isAdmin = false;

loginData = {name: '', email: '', password: ''} as LoginDto;
 isRegister = false;

constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
// console.log(this.loginData.email);
 //   console.log(this.loginData.password)
this.userService.login(this.loginData).subscribe(user => {
  if (user) {
   this.router.navigate(['home']);
  }
  else {
    alert('Pogresni podaci');
  }
})
}

register(): void {
if (this.isRegister || this.isAdmin) {
  this.userService.register(this.loginData);
  this.isRegister = false;
} else {
  this.isRegister = true;
}
}

get getTitle(): string {
  if (this.isRegister || this.isAdmin) {
  return 'Register Form';
  }
  return 'Login Form';
}

get getRegisterLabel(): string {
  if (this.isRegister || this.isAdmin) {
    return 'Register';
  }
  else return 'Create account';
}


}
