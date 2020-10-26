import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../types';
import { Observable } from 'rxjs';

interface SearchResponse {
  Search: Movie[];
  Response: boolean;
  totalResults: number;
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

   }

