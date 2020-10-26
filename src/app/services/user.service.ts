import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginDto, User, USERS, } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  usersDb = USERS;
  loggedUser: User;

  login(loginData: LoginDto): Observable<User> {

    const user = this.usersDb.find(x => x.email === loginData.email &&
      x.password === loginData.password)
    this.loggedUser = user;

    if (user) {
      if (localStorage.getItem('user')) {
        localStorage.clear();
      }
      localStorage.setItem('user', JSON.stringify(user));
    }

    return of(user)
  }

  // regusersDb = USERSreg;

  register(loginData: LoginDto): void {

    //    this.regusersDb.push({ email: regData.email, password: regData.password, name: regData.name })
    this.usersDb.push({
      ...loginData,
      id: Math.random() * 10 + 5,
    })

  }

  setLoggedUser(user: User): void {
    this.loggedUser = user;
  }
}