import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginDto, Role, User, USERS, } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

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

  register(loginData: LoginDto, isAdmin?: boolean): void {

    //    this.regusersDb.push({ email: regData.email, password: regData.password, name: regData.name })
    this.usersDb.push({
      ...loginData,
      role: isAdmin ? Role.Admin : Role.User,
      id: Math.random() * 10 + 5,
    })

  }

  setLoggedUser(user: User): void {
    this.loggedUser = user;
  }


  logout(): void {
    this.loggedUser = undefined;
    localStorage.clear();
  }
}