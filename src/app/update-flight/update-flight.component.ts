import {Component, OnInit} from '@angular/core';
import {FlightService} from '../flight/flight.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Flight} from '../flight/flight';


@Component({
  selector: 'app-my-groups',
  templateUrl: './update-flight.component.html'
})

export class UpdateFlightsComponent implements OnInit {
  groupForm: FormGroup;
  id: number;
  flight: Flight;

  constructor(private flightService: FlightService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.groupForm = this.formBuilder.group({
      company: '',
      flightNo: '',
      date: '',
      departureCountry: '',
      arrivalCountry: ''
    });
  }

  onSubmit(): void {
    const data = {
      company: this.groupForm.get('company').value,
      flightNo: this.groupForm.get('flightNo').value,
      date: this.groupForm.get('date').value,
      departureCountry: this.groupForm.get('departureCountry').value,
      arrivalCountry: this.groupForm.get('arrivalCountry').value
    };

    this.flightService.updateFlight(this.id, data);
  }

  ngOnInit(): void {
    this.route.queryParams.
      subscribe(params => {
        this.id = params.id;
    });

    this.flightService.getFlight(this.id).
      subscribe(data => this.flight = data);
  }
}



