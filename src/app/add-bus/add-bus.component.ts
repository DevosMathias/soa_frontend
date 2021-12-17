import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BusService} from '../bus/bus.service';


@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html'
})

export class AddBusComponent implements OnInit {
  groupForm: FormGroup;


  constructor(private busService: BusService, private formBuilder: FormBuilder) {
  }



  ngOnInit(): void {
  }

  onSubmit(busnr): void {
    this.busService.addBus(JSON.parse('{"busnummer": ' + busnr + '}'));
  }
}



