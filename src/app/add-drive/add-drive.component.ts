import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {DriveService} from '../drive/drive.service';

@Component({
  selector: 'app-drive-add',
  templateUrl: './add-drive.component.html'
})
export class AddDriveComponent{
  groupForm: FormGroup;

  constructor(private driveService: DriveService, private formBuilder: FormBuilder) {
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
  this.driveService.addDrive(data);
}
}
