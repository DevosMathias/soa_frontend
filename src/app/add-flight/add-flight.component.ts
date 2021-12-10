import {Component} from '@angular/core';
import {FlightService} from '../flight/flight.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html'
})

export class AddFlightsComponent {
  groupForm: FormGroup;


  constructor(private flightService: FlightService, private formBuilder: FormBuilder) {
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
    this.flightService.addFlight(data);
  }
}
