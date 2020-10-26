/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { MovieService } from '../services/movie.service';
import { UserService } from '../services/user.service';
import { Movie, User } from '../types';

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
  search: '';
 movies: Movie[];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    private userService: UserService,
    private movieService: MovieService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

getMovie(): void {
  this.movieService.searchMovie(this.search)
  .subscribe(x => this.movies = x.Search.slice(0.10))
}

ngOnInit(): void {
  this.user = this.userService.loggedUser;
}

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
