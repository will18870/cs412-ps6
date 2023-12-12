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

    getWeather(city: string): Observable<any> {
        const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
        return this.http.get(url);
    }
}