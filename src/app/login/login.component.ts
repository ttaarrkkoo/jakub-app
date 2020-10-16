import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../types';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {


loginData = {name: '', email: '', password: ''} as LoginDto;
 

constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onLogin() {
    console.log(this.loginData.email);
    console.log(this.loginData.password)
  }
}