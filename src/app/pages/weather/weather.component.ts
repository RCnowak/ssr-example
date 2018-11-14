import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <div style="text-align:center">
        <h1>
            Ульяновск {{ route.snapshot.data.weather.current.temp_c }} C!
        </h1>
    </div>
  `
})
export class WeatherComponent {
    constructor(public route: ActivatedRoute) { }
}
