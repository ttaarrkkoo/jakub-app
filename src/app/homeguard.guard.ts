import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
import { User } from './types';

@Injectable({
  providedIn: 'root'
})
export class HomeguardGuard implements CanActivate {
  
  constructor(private userService: UserService, private router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
const user = JSON.parse(localStorage.getItem('user')) as User;

if (user) {
  this.userService.setLoggedUser(user);
   return true;
}


   if(this.userService.loggedUser) {
    return true;
   }
  this.router.navigate(['login']);
  return false;
}
}
