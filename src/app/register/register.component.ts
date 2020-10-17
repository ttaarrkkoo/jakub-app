import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { RegisterDto } from '../types';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regData = {name: '', email: '', password: ''} as RegisterDto;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }


  onReg() {
    console.log(this.regData.email = '')
    console.log(this.regData.password = '')
  }

}

