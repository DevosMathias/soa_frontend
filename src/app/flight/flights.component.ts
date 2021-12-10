import {Component, OnInit} from '@angular/core';
import {Flight} from './flight';
import {timer} from 'rxjs';
import {FlightService} from './flight.service';


@Component({
  selector: 'app-my-groups',
  templateUrl: './flights.component.html'
})

export class FlightsComponent implements OnInit {
  flights: Flight[];

  constructor(private flightService: FlightService) {
  }

  getFlights(): void {
    timer(0, 2500)
      .subscribe(() => {
        this.flightService.getFlights()
          .subscribe(data => this.flights = data);
      });

    console.log(    this.flightService.getFlights());
    console.log(this.flights);
  }

  ngOnInit(): void {
    this.getFlights();
  }

  remove(id): void {
    this.flightService.deleteFlight(encodeURIComponent(id));
  }
}



