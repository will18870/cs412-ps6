// William Huang - U53888747

import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

// this component captures events and runs getWeather accordingly
@Component({
  selector: 'app-root',
  template: `
    <h2>Forms in Angular</h2>

    <!-- this form receives the event and runs the api method -->
    <app-form (formSubmit)="getWeather($event)"></app-form>
    <app-result
      [realWeather]="realWeather"
      [temperature]="temperature"
      [humidity]="humidity"
      [pressure]="pressure"
    ></app-result>
  `,
})
export class AppComponent {
  realWeather?: string = 'who knows';
  city: string = 'boston';
  units: string = 'imperial';
  temperature?: number;
  humidity?: number;
  pressure?: number;
  state!: string;

  constructor(private weatherService: WeatherService) {}

  getWeather(formData: any) {
    this.weatherService.getWeather(formData.city).subscribe((data) => {
      this.temperature = data.main.temp;
      this.humidity = data.main.humidity;
      this.pressure = data.main.pressure;
      this.realWeather = data.weather[0].main;
    });
  }
}
