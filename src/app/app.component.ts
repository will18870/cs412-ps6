// William Huang - U53888747

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ CommonModule, RouterOutlet],
  standalone: true
})
export class AppComponent {
  title = 'ps6';
  weatherData: any; // data var
  exists: boolean = false; // does data exist?

  constructor() {}

  fetchData() {
    console.log("test!");

    // "fetching" my api data (from a local file)
    fetch('../assets/apiData.json')
        .then(response => response.json())
        .then(jsonData => {
          this.weatherData = jsonData;
          this.exists = true;
        })
        .catch(error => console.error('you are a fool:', error));
  }

  doThing() {
    console.log("DO SOMETHING FOR THE LOVE OF GOD!");
  }
}
