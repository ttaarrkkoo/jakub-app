import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../types';
import { Observable } from 'rxjs';

interface SearchResponse {
  Search: Movie[];
  Response: boolean;
  totalResults: number;
}

export interface MovieResponse {
  Title: string;
  Year: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  imdbRating: number;
}

@Injectable({
  providedIn: 'root'
})



export class MovieService {
apiRoute = 'http://www.omdbapi.com/'
apiKey = '43337568'; 


  constructor(private httpClient: HttpClient) { }

    searchMovie(title: string): Observable<SearchResponse> {
     return this.httpClient.get<SearchResponse>(`${this.apiRoute}?s=${title}&apikey=${this.apiKey}`); 

    }
    
    getMovie(id: string): Observable<MovieResponse> {
      return this.httpClient.get<MovieResponse>(`${this.apiRoute}?i=${id}&apikey=${this.apiKey}`)
    }
   

   }

