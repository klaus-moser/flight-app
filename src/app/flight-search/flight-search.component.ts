import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  // default values
  from = 'München';
  to = 'Tokio';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null; // initial value null

  constructor() { }

  ngOnInit(): void {
  }

  // search for a flight
  search(): void{}

  // select flight
  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
