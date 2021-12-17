import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BusService} from '../bus/bus.service';
import {HalteService} from '../halte/halte.service';


@Component({
  selector: 'app-add-stop',
  templateUrl: './add-stop.component.html'
})

export class AddStopComponent implements OnInit {
  groupForm: FormGroup;


  constructor(private halteService: HalteService, private formBuilder: FormBuilder) {
  }



  ngOnInit(): void {
  }

  onSubmit(stopnaam): void {
    this.halteService.addHalte(JSON.parse('{"halteNaam": "' + stopnaam + '"}'));
  }
  /*
  onSubmit(busnr): void {
    this.busService.addBus(JSON.parse("{\"busnummer\": " + busnr + "}"));
  }
   */
}



