import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Station} from '../station/station';
import {User} from './user';
import {Liveboard} from '../liveboard/liveboard';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private allUsersUrl = 'http://localhost:8081/lhapi/all';
  private addUsersUrl = 'http://localhost:8081/lhapi/add';
  private updateUsersUrl = 'http://localhost:8081/lhapi/update';
  private getUserUrl = 'http://localhost:8081/lhapi/getUser/';
  private deleteUsersUrl = 'http://localhost:8081/lhapi/delete';
  private addfavoriteUrl = 'http://localhost:8081/lhapi/addFavoriteStation';
  private removefavoriteUrl = 'http://localhost:8081/lhapi/removeFavoriteStation';
  private getLiveBoardUrl = 'http://localhost:8081/lhapi/getliveboard';

  private formHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET')
    .append('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  allUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.allUsersUrl);
  }

  addUser(data): void {
    this.http.post(this.addUsersUrl, JSON.stringify(data), {headers: this.formHeaders}).subscribe(
      (response) => this.allUsers(),
      (error) => alert('An error occurred')
    );
  }

  updateUser(data): void {
    this.http.put(this.updateUsersUrl, JSON.stringify(data), {headers: this.formHeaders}).subscribe(
      (response) => this.allUsers(),
      (error) => alert('An error occurred')
    );
  }

  getUser(userid): Observable<User> {
    return this.http.get<User>(this.getUserUrl + userid);
  }

  deleteUser(id): void {
    this.http.delete(this.deleteUsersUrl + '/' + id, {headers: this.formHeaders}).subscribe();
  }

  addFavorite(userid, stationid): void {
    this.http.post(this.addfavoriteUrl, JSON.stringify({userid, stationid})).subscribe(
      (response) => this.allUsers(),
      (error) => alert('An error occurred')
    );
  }

  removeFavorite(userid): void {
    this.http.get<User[]>(this.removefavoriteUrl + '/' + userid);
  }

  getLiveBoard(stationid): Observable<Liveboard> {
    return this.http.get<Liveboard>(this.getLiveBoardUrl + '/' + stationid, {headers: this.formHeaders});
  }


}
