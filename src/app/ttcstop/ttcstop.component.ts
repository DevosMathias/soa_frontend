import {Component, OnInit} from '@angular/core';
import {TtcstopService} from './ttcstop.service';


@Component({
  selector: 'app-ttc-stop',
  templateUrl: './ttcstop.component.html'
})

export class TtcstopComponent implements OnInit {

  jsonn: any;
  cols: any;

  constructor(private ttcstopService: TtcstopService) {
  }


  getStopInfo(input): void {
    this.ttcstopService.getStop(input)
      .subscribe(data => {
        this.jsonn = data;
      });
  }
  ngOnInit(): void {
  }
}



