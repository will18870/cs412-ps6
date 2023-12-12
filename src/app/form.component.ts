// William Huang - U53888747

import { Component, EventEmitter, Output } from '@angular/core';


// this component contains the form to be interacted with.
// submitting will emit an event to let the app component know
// that info has been sent by the user.
@Component({
    selector: 'app-form',
    template: `
    <form (ngSubmit)="submitForm()">
      City: <input name="city" [(ngModel)]="city">
      State: <input name="state" [(ngModel)]="state">
      Units: <input name="units" [(ngModel)]="units">
      <button type="submit">Submit</button>
    </form>
  `,
})
export class FormComponent {
    @Output() formSubmit = new EventEmitter<any>();

    // some default values
    city: string = 'boston';
    state: string = '';
    units: string = 'imperial';

    submitForm() {
        this.formSubmit.emit({ city: this.city, state: this.state, units: this.units });
    }
}