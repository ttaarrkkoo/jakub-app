import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginDto, Pol, Role, User, USERS, } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  usersDb = USERS;
  loggedUser: User;

 login(loginData: LoginDto):  Observable<User> {

    
    const user = this.usersDb.find(x => x.email === loginData.email &&
      x.password === loginData.password && x.role === loginData.role && x.datum === loginData.datum && x.pol === loginData.pol)
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


  showUser(loginData: LoginDto) {
    this.usersDb.find(x => {
      x.email === loginData.email &&
        x.password === loginData.password && x.role === loginData.role
    })

  }
}