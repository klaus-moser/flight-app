import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {

  @Input() item: Flight | null = null;
  @Input() selected = false;

  select() {
    this.selected = true;
  }

  deselect() {
    this.selected = false;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
