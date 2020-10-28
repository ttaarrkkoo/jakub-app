import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../types';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input() movie: Movie;

constructor(private router: Router) { }

selectMovie(): void {
  this.router.navigate([`home/details/${this.movie.imdbID}`])
}


}
 