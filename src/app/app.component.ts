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

  city!: string;
  units: string = "imperial";
  temperature?: number;
  humidity?: number;
  pressure?: number;
  state!: string;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather('Boston').subscribe((data) => {
      this.weatherData = data;
    });
  }
}