import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Resolve } from '@angular/router';

@Injectable()
export class WeatherResolver implements Resolve<any> {
    constructor(private http: ApiService) { }

    resolve() {
        return this.http.getWeather();
    }
}
