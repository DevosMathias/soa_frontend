import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';
import {StationService} from './station.service';
import {Station} from './station';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  stations: Station[];
  constructor(private stationService: StationService) { }

  getFlights(): void {
    timer(0, 2500)
      .subscribe(() => {
        this.stationService.allStations()
          .subscribe(data => this.stations = data);
      });

    console.log('response: ' + this.stationService.allStations());
    console.log('data' + this.stations);
  }

  ngOnInit(): void {
    this.getFlights();
  }

  remove(id): void {
    this.stationService.deleteStation(encodeURIComponent(id));
  }

}
