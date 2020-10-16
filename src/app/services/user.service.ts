import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginDto, User, USERS } from '../types';

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


}
