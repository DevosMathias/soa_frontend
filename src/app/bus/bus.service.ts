import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Bus} from './bus';


@Injectable()
export class BusService {

  private url = 'http://localhost:8081/api_Arno/';

  private formHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET')
    .append('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Bus[]>{
    return this.http.get<Bus[]>(this.url + 'getAllBusses');
  }
  getBus(id): Observable<Bus>{
    return this.http.get<Bus>(this.url + 'getBus/' + id);
  }
  addBus(data): void {
    this.http.post(this.url + 'addBus', JSON.stringify(data), {headers: this.formHeaders}).subscribe(
      (response) => this.getAll(),
      (error) => alert('An error occurred')
    );
  }
  updateBus(data, id): void {
    this.http.post(this.url + 'updateBus/' + id, JSON.stringify(data), {headers: this.formHeaders}).subscribe(
      (response) => this.getAll(),
      (error) => alert('An error occurred')
    );
  }
  deleteBus(id): void {
    this.http.delete(this.url + 'deleteBus/' + id, {headers: this.formHeaders}).subscribe();
  }
  addHalteToBus(busid, halteid): void {
    this.http.post(this.url + 'addHalteToBus/' + busid + '/' + halteid, {headers: this.formHeaders}).subscribe(
      (response) => this.getAll(),
      (error) => alert('An error occurred')
    );
  }
  removeHalteFromBus(busid, halteid): void {
    this.http.post(this.url + 'removeHalteFromBus/' + busid + '/' + halteid, {headers: this.formHeaders}).subscribe(
      (response) => this.getAll(),
      (error) => alert('An error occurred')
    );
  }
}

