// William Huang - U53888747

import { Component, Input } from '@angular/core';

// this component just shows the results.
// @Input is used to get info from the parent App Component
@Component({
    selector: 'app-result',
    template: `
    <div>
      <h2>Results:</h2>
      Current weather: {{ realWeather }}<br />
      Temp: {{ temperature | number: '3.5' }}
      Pressure: {{ pressure | currency }}
      Humidity : {{ humidity }}
      <hr />
    </div>
  `,
})
export class ResultComponent {
    @Input() realWeather?: string;
    @Input() temperature?: number;
    @Input() humidity?: number;
    @Input() pressure?: number;
}
