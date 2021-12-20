import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';
import {Drive} from './drive';
import {DriveService} from './drive.service';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
})
export class DriveComponent implements OnInit {
  drives: Drive[];
  constructor(private driveService: DriveService) {

  }

  getDrives(): void {
    timer(0, 2500).subscribe(() => { this.driveService.getDrives().subscribe(data => this.drives = data);
    });
  }
  ngOnInit(): void {
    this.getDrives();
  }

  remove(id): void {
    this.driveService.deleteDrive(encodeURIComponent(id));
  }

}
