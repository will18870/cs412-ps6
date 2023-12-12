// William Huang - U53888747

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  weatherData?: any;

  realWeather?: string = "who knows";
  city: string = "boston";
  units: string = "imperial";
  temperature?: number;
  humidity?: number;
  pressure?: number;
  state!: string;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.temperature = data.main.temp;
      this.humidity = data.main.humidity;
      this.pressure = data.main.pressure;
      this.realWeather = data.weather[0].main;
    });
  }
}