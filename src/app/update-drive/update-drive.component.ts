import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DriveService} from '../drive/drive.service';
import {Drive} from '../drive/drive';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-drive-update',
  templateUrl: './update-drive.component.html'
})
export class UpdateDriveComponent implements OnInit {
  groupForm: FormGroup;
  id: number;
  drive: Drive;

  // tslint:disable-next-line:max-line-length
  constructor(private driveService: DriveService, private formBuilder: FormBuilder, private  router: Router, private  route: ActivatedRoute) {
    this.groupForm = this.formBuilder.group( {
      locationX: '',
      locationY: '',
      driver: '',
      customer: ''
  });
}

  onSubmit(): void {
  const data = {
    locationX: this.groupForm.get('locationX').value,
    locationY: this.groupForm.get('locationY').value,
    driver: this.groupForm.get('driver').value,
    customer: this.groupForm.get('customer').value
  };

  this.driveService.updateDrive(data, data);
}
  ngOnInit(): void {
    this.route.queryParams.
    subscribe(params => {
    this.id = params.id;
  });

    this.driveService.getDrives()[this.id]
  .subscribe(data => this.drive = data);
  }
}
