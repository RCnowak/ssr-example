import { ApiService } from './api.service';
import { WeatherResolver } from './weather.resolver';

export * from './api.service';
export * from './weather.resolver';

export const services = [
    ApiService,
    WeatherResolver
];
