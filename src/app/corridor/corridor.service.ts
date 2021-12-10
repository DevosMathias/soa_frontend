import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Corridor} from './corridor';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class CorridorService {

  private allCorridorsUrl = 'http://localhost:8081/api/allCorridors';


  constructor(private http: HttpClient) {
  }

  getCorridors(): Observable<Corridor[]> {
    return this.http.get<Corridor[]>(this.allCorridorsUrl);
  }
}

