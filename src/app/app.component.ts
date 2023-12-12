// William Huang - U53888747

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Weather App</h1>
    <button (click)="getWeather()">Get Weather</button>
    <div *ngIf="weatherData">
      <p>Temperature: {{ weatherData.main.temp }}</p>
      <p>Description: {{ weatherData.weather[0].description }}</p>
    </div>
  `,
  imports: [ CommonModule, RouterOutlet ],
  standalone: true
})
export class AppComponent {
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather('Boston').subscribe((data) => {
      this.weatherData = data;
    });
  }
}