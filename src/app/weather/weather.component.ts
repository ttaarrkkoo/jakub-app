import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  loc: string = ''
  currentWeather: any;
  

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
  }
  
  searchWeather(loc: string) {
    this.loc = '';
    this.currentWeather = {};
    this.weatherService.getWeather()
      .subscribe(res => {
        this.currentWeather = res;

      })
  }
}

