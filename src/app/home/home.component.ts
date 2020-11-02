import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { UserService } from '../services/user.service';
import { Movie, Role, User } from '../types';

/** @title Responsive sidenav */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  user: User;
  title = 'Movies';


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private userService: UserService,
    private movieService: MovieService,
    private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.user = this.userService.loggedUser;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  OnLogout() {
    this.userService.logout()
    this.router.navigate(['login']);
  }

  isAdmin() {
    if (this.userService.loggedUser) {
      if (this.userService.loggedUser.role === Role.Admin) {
        return true;
      }
    }
    return false;
  }
}
