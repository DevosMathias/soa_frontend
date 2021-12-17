import {Component, OnInit} from '@angular/core';
import {Halte} from './halte';
import {HalteService} from './halte.service';


@Component({
  selector: 'app-stop',
  templateUrl: './halte.component.html'
})

export class HalteComponent implements OnInit {

  haltes: Halte[];

  constructor(private halteService: HalteService) {
    this.getHaltes();
  }


  getHaltes(): void{
    this.halteService.getAll().subscribe(halteData => this.haltes = halteData);
  }
  deleteHalte(id): void{
    this.halteService.deleteHalte(id);
    this.getHaltes();
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



