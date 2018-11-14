import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as pages from './pages';
import * as services from './services';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: pages.MainComponent
  },
  {
    path: 'weather',
    resolve: {
      weather: services.WeatherResolver
    },
    component: pages.WeatherComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
