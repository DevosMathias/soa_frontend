import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Station} from './station';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private allStationsUrl = 'http://localhost:8081/lhapi/all';
  private addStationsUrl = 'http://localhost:8081/lhapi/add';
  private updateStationsUrl = 'http://localhost:8081/lhapi/update';
  private deleteStationsUrl = 'http://localhost:8081/lhapi/add';

  private formHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  allStations(): Observable<Station[]> {
    return this.http.get<Station[]>(this.allStationsUrl);
  }

  addStation(data): void {
    this.http.post(this.addStationsUrl, JSON.stringify(data), {headers: this.formHeaders}).subscribe(
      (response) => this.allStations(),
      (error) => alert('An error occurred')
    );
  }

  updateStation(data): void {
    this.http.post(this.addStationsUrl, JSON.stringify(data), {headers: this.formHeaders}).subscribe(
      (response) => this.allStations(),
      (error) => alert('An error occurred')
    );
  }

  deleteStation(id): void {
    this.http.delete(this.deleteStationsUrl + id, {headers: this.formHeaders}).subscribe();
  }


}
