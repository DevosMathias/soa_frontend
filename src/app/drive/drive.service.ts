import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Drive} from './drive';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DriveService {
  private allDrivesUrl = 'http://localhost:8085/api/all';
  private addDriveUrl = 'http://localhost:8085/api/add';
  private updateDriveUrl = 'http://localhost:8085/api/update/';
  private deleteDriveUrl = 'http://localhost:8085/api/delete/';

  private  formHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
  }

  getDrives(): Observable<Drive[]> {
    return this.http.get<Drive[]>(this.allDrivesUrl);
  }

  addDrive(data): void {
    console.log(JSON.stringify(data));

    this.http.post(this.addDriveUrl, JSON.stringify(data), {headers: this.formHeaders}).subscribe(
      (response) => this.getDrives(),
      (error) => alert('An error occurred')
    );
  }

  deleteDrive(id): void {
    this.http.delete(this.deleteDriveUrl + id, {headers: this.formHeaders}).subscribe();
  }

  updateDrive(id: { locationY: any; driver: any; locationX: any; customer: any } | string, data: any): void {
    this.http.put(this.updateDriveUrl + id, JSON.stringify(data), {headers: this.formHeaders}).subscribe(
      (response) => this.getDrives(),
      (error) => alert('An error occurred')
    );
  }
  }

