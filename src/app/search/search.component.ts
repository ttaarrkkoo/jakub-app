import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  search: '';
  movies: Movie[];
  
  ngOnInit(): void {
  }

  getMovie(): void {
    this.movieService.searchMovie(this.search)
    .subscribe(x => this.movies = x.Search.slice(0.10))
  }

}
