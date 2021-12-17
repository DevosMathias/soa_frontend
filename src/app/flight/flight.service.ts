import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Flight} from './flight';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class FlightService {

  private allFlightsUrl = 'http://localhost:8081/api/allFlights';

  private addFlightUrl = 'http://localhost:8081/api/addFlight';

  private deleteFlightUrl = 'http://localhost:8081/api/deleteFlight/';

  private getFlightByIdUrl = 'http://localhost:8081/api/getFlightById/';

  private updateFlightUrl = 'http://localhost:8081/api/updateFlight/';

  private formHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
  }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.allFlightsUrl);
  }

  addFlight(data): void {
    console.log(JSON.stringify(data));

    this.http.post(this.addFlightUrl, JSON.stringify(data), {headers: this.formHeaders}).subscribe(
      (response) => this.getFlights(),
      (error) => alert('An error occurred')
    );
  }

  deleteFlight(id): void {
    this.http.delete(this.deleteFlightUrl + id, {headers: this.formHeaders}).subscribe();
  }

  getFlight(id): Observable<Flight> {
    return this.http.get<Flight>(this.getFlightByIdUrl + id);
  }

  updateFlight(id, data): void {
    this.http.put(this.updateFlightUrl + id, JSON.stringify(data), {headers: this.formHeaders}).subscribe(
      (response) => this.getFlights(),
      (error) => alert('An error occurred')
    );
  }
}

