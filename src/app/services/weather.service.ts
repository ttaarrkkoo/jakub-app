import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
const loc: string = '';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  
  constructor(private httpClient: HttpClient) { }
     
 
  apiKey = "b0ec646b8b9b8036087e873d2bb4888e"
  apiRoute = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${this.apiKey}`
  
  getWeather(): Observable<any> {
  
    return this.httpClient.get<any>(`${this.apiRoute}`); 
    
  }
  
  /*  const xttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('temp').innerHTML = this.responseText;
        }
    };

    xmlhttp.open("GET", this.apiRoute, true);
    xmlhttp.send();
*/
}
  




