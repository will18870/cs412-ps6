import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {FormGroup} from '@angular/forms';
import {config as API} from '../config/openweather'

@Injectable({
    providedIn: 'root'
})
export class OpWeService {

    baseURL: string = API.baseURL

    constructor(private http: HttpClient) {
    }

    getCurrentWeather(lat: number, lon: number): Promise<any> {
        const url = `${API.baseURL}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${API.apiKey}&units=${API.units}`;

        return this.http.get<any>(url).toPromise();
    }
}