import { Component, OnInit } from '@angular/core';

import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent implements OnInit {
  // default values
  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null; // initial value null

  // basket dictionary
  basket: { [key: number]: boolean } = {
    3: true,
    5: true,
  };
  //const inBasket = this.basket[7];

  // get FlightService using Dependency Injection
  constructor(private flightService: FlightService) {}

  ngOnInit(): void {}

  // search for a flight
  search(): void {

    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.error('Error', err);
      }
    })
  }

  // select flight
  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
