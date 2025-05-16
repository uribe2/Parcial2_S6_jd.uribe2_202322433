import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css'],
  standalone: true
})
export class AirlineListComponent implements OnInit {
  airlines: Array<Airline> = [];
  selected: Boolean = false;
  selectedAirline!: Airline;

  constructor(private airlineService: AirlineService) { }

  ngOnInit() {
    this.getAirlines();
  }

  getAirlines(): void {
    this.airlineService.getAirlines()
      .subscribe(airlines => {
        this.airlines = airlines;
      });
  }

  onSelected(airline: Airline): void {
    this.selected = true;
    this.selectedAirline = airline;
  }
}