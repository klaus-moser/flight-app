import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    // default route: redirection to '/home'
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent,
  },
  {
    path: 'flight-edit/:id',
    component: FlightEditComponent,
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    // wildcard: all other unvaldi routes
    path: '**',
    component: NotFoundComponent,
  },
];
