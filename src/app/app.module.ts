import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form.component';
import { ResultComponent } from './result.component';
import { WeatherService } from './weather.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        ResultComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        AppComponent
    ],
    providers: [
        WeatherService,
        // Add other services or providers here
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
