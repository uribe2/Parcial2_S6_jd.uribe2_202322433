import { Component, Input, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { ActivatedRoute } from '@angular/router';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-airline-detail',
  templateUrl: './airline-detail.component.html',
  styleUrls: ['./airline-detail.component.css'],
  standalone: true
})
export class AirlineDetailComponent implements OnInit {

  airlineId!: string;
  @Input() airlineDetail!: Airline;

  constructor(
    private route: ActivatedRoute,
    private airlineService: AirlineService
  ) { }

  getAirline() {
    this.airlineService.getAirline(this.airlineId).subscribe(airline => {
      this.airlineDetail = airline;
    })
  }

  ngOnInit() {
    if (this.airlineDetail === undefined) {
      this.airlineId = this.route.snapshot.paramMap.get('id')!
      if (this.airlineId) {
        this.getAirline();
      }
    }
  }
}
