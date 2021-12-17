import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HalteService} from '../halte/halte.service';
import {Halte} from '../halte/halte';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-update-stop',
  templateUrl: './update-stop.component.html'
})

export class UpdateStopComponent implements OnInit {
  groupForm: FormGroup;
  id: number;
  halte: Halte;


  constructor(private halteService: HalteService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }



  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });
    this.halteService.getHalte(this.id).subscribe(data => this.halte = data);
  }

  onSubmit(stopnaam): void {
    this.halteService.updateHalte(JSON.parse('{"halteNaam": "' + stopnaam + '"}'), this.id);
  }
}



