import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class TtcstopService {

  private ttcUrl = 'http://localhost:8081/api_Arno/getTTCHalte/';

  private formHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET')
    .append('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) {
  }

  getStop(stop): Observable<any>{
    return this.http.get(this.ttcUrl + stop);
  }
}

