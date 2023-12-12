// William Huang - U53888747

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {OpWeService} from "./services/opwe.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ CommonModule, RouterOutlet],
  standalone: true
})
export class AppComponent {

  temperature?: number;
  humidity?: number;
  pressure?: number;

  constructor(private OpWe: OpWeService) {

  }
  async getWeather() {
    try {
      const response = await this.OpWe.getCurrentWeather(42.4, -71.0);
      this.temperature = response.current.temp;
      this.humidity = response.current.humidity;
      this.pressure = response.current.pressure;
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  }
}
