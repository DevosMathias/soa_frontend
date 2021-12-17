import {Component, OnInit} from '@angular/core';
import {BusService} from './bus.service';
import {Bus} from './bus';


@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html'
})

export class BusComponent implements OnInit {

  busses: Bus[];
  jsonn: string;

  constructor(private busService: BusService) {
    this.getBusses();
  }


  getBusses(): void{
    this.busService.getAll().subscribe(busData => this.busses = busData);
  }
  deleteBus(id): void{
    this.busService.deleteBus(id);
    this.getBusses();
  }
  addHalteToBus(busId, halteId): void{
    this.busService.addHalteToBus(busId, halteId);
    this.getBusses();
  }
  removeHalteFromBus(busId, halteId): void{
    this.busService.removeHalteFromBus(busId, halteId);
    this.getBusses();
  }
  /*
  getStopInfo(input): void{
    this.ttcstopService.getStop(input)
      .subscribe(data => {
        console.log(data);
        this.jsonn = data;
      });
  }
   */
  ngOnInit(): void {
  }
}



