import { Component, Input, OnInit } from '@angular/core';
import { LoginDto, Pol, Role } from '../types';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { sha256 } from 'src/hash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  @Input() isAdmin = false;

  musko: Pol.Musko;
  zensko: Pol.Zensko;
  admin: Role.Admin;
  user: Role.User;


  loginData = { name: '', email: '', password: '', datum: '', pol: {}, role: {} } as LoginDto;
  isRegister = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin(): Promise<void> {
    console.log(this.loginData);
    this.loginData.password = await sha256(this.loginData.password)


    this.userService.login(this.loginData).subscribe(user => {
      if (user) {
        this.router.navigate(['home']);
      }
      else {
        alert('Pogresni podaci');
      }
    })
  }

  async register(): Promise<void> {
    this.loginData.password = await sha256(this.loginData.password)
    if (this.isRegister || this.isAdmin) {
      this.userService.register(this.loginData, this.isAdmin);
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
