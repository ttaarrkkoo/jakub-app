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
  

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }
  
  searchWeather() {
    this.currentWeather = {};
    this.weatherService.getWeather(this.loc)
      .subscribe(res => {
        this.currentWeather = res;
      console.log(this.currentWeather)
      })
  }
}

