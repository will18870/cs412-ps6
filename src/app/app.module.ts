import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        // Add other modules here
    ],
    providers: [
        WeatherService,
        // Add other services or providers here
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}