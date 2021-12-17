import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BusService} from '../bus/bus.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Bus} from '../bus/bus';


@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html'
})

export class UpdateBusComponent implements OnInit {
  groupForm: FormGroup;
  id: number;
  bus: Bus;

  constructor(private busService: BusService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });
    this.busService.getBus(this.id).subscribe(data => this.bus = data);
  }

  onSubmit(busnr): void {
    this.busService.updateBus(JSON.parse('{"busnummer": ' + busnr + '}'), this.id);
  }
}


