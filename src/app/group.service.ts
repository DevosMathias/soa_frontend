import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Group} from './group';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class GroupService {

  private groupsUrl = 'http://localhost:8080/Servlet?command=ShowAllGroupsOverview';

  private addGroupUrl = 'http://localhost:8080/Servlet?command=AddGroup';

  private deleteGroupUrl = 'http://localhost:8080/Servlet?command=DeleteGroup';

  private formHeaders = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private http: HttpClient) {
  }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupsUrl);
  }

  addGroup(data): void {
    this.http.post(this.addGroupUrl, data, {headers: this.formHeaders}).subscribe(
      (response) => this.getGroups(),
      (error) => alert('An error occurred')
    );
  }

  deleteGroup(id): void {
    this.http.post(this.deleteGroupUrl, id, {headers: this.formHeaders}).subscribe();
  }
}

