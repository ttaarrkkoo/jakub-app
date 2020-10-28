import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieResponse, MovieService } from '../services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
movie: MovieResponse;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
  
  
  this.movieService.getMovie(id).subscribe(x => {
    this.movie = x;
    console.log(this.movie);
  })
  }

}
