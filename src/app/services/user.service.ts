import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginDto, User, USERS, USERSreg, RegisterDto, UserReg } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  usersDb = USERS;


  login(loginData: LoginDto): Observable<User> {

    const user = this.usersDb.find(x => x.email === loginData.email &&
      x.password === loginData.password)
    if (user) {

      return of(user);
    }
  }
  regusersDb = USERSreg;

  register(regData: RegisterDto): void {

    this.regusersDb.push({ email: regData.email, password: regData.password, name: regData.name })
  }
}
