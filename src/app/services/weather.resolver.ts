import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Resolve } from '@angular/router';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

import { tap } from 'rxjs/operators';

import { ApiService } from './api.service';

@Injectable()
export class WeatherResolver implements Resolve<any> {
    private readonly weatherKey = makeStateKey('ulyanovsk_weather');
    constructor(
        private http: ApiService,
        private transfer: TransferState,
        @Inject(PLATFORM_ID) private platformId,
    ) { }

    resolve() {
        if (this.transfer.hasKey(this.weatherKey)) {
            return this.transfer.get(this.weatherKey, null);
        }
        return this.http.getWeather()
            .pipe(tap(data => {
                if (isPlatformServer(this.platformId)) {
                    this.transfer.set(this.weatherKey, data);
                }
            }));
    }
}
