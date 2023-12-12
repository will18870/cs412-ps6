// William Huang - U53888747

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../config';

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    private apiKey = AppConfig.apiKey;
    private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    constructor(private http: HttpClient) {}

    // because i did not want to run both an angular and a node instance simultaneously,
    // i just called the api directly. this would functionally work the same if i called
    // my POST request from my backend node app from PS4.
    // also, only the city field works. but if i changed the api call to fit more
    // params it probably could also change units to metric or something
    getWeather(city: string): Observable<any> {
        const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
        return this.http.get(url);
    }
}