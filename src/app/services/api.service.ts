import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    getWeather() {
        return this.http.get('http://api.apixu.com/v1/current.json?key=7cda8da039d44c3c8ff204333181411&q=Ulyanovsk');
    }
}
