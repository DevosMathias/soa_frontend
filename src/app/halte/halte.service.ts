import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Halte} from './halte';


@Injectable()
export class HalteService {

  private url = 'http://localhost:8081/api_Arno/';

  private formHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET')
    .append('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Halte[]>{
    return this.http.get<Halte[]>(this.url + 'getAllHaltes');
  }
  getHalte(id): Observable<Halte>{
    return this.http.get<Halte>(this.url + 'getHalte/' + id);
  }
  addHalte(data): void {
    this.http.post(this.url + 'addHalte', JSON.stringify(data), {headers: this.formHeaders}).subscribe(
      (response) => this.getAll(),
      (error) => alert('An error occurred')
    );
  }
  updateHalte(data, id): void {
    this.http.post(this.url + 'updateHalte/' + id, JSON.stringify(data), {headers: this.formHeaders}).subscribe(
      (response) => this.getAll(),
      (error) => alert('An error occurred')
    );
  }
  deleteHalte(id): void {
    this.http.delete(this.url + 'deleteHalte/' + id, {headers: this.formHeaders}).subscribe(
      (response) => this.getAll(),
      (error) => alert('An error occurred')
    );
  }
}

