import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  
  constructor(private httpClient: HttpClient) { }
     
 
  apiKey = "b0ec646b8b9b8036087e873d2bb4888e"
  apiRoute = 'https://api.openweathermap.org/data/2.5'
  
  getWeather(loc: string): Observable<any> {
  
    return this.httpClient.get<any>(`${this.apiRoute}/weather?q=${loc}&appid=${this.apiKey}&units=metric`); 
    
  }
}