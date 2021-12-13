import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../user/user';
import {Liveboard} from './liveboard';
import {Departure} from './liveboard';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-liveboard',
  templateUrl: './liveboard.component.html',
  styleUrls: ['./liveboard.component.css']
})
export class LiveboardComponent implements OnInit {
  users: User[];
  stationid: string;
  stationname: string;
  liveBoard: Liveboard;
  departures: Departure[];
  favorites: string[];

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.getUsers();
    this.stationid = null;
    this.stationname = null;
  }
  getUsers(): void {
    this.userService.allUsers().subscribe(users => this.users = users);
  }
  getLiveBoard(stationid): void {
    this.stationid = stationid;
    const temp = this.userService.getLiveBoard(stationid).subscribe(
      (data) => this.initdata(data),
      (error) => alert('This is not a valid NMBS station id')
    );
    console.log(this.liveBoard);
  }
  initdata(liveboard): void {
    this.liveBoard = liveboard;
    this.departures = liveboard.departures.departure;
    this.stationname = liveboard.station;
    console.log(this.liveBoard);
    console.log(this.departures);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.id !== undefined) {
        this.getLiveBoard(params.id);
        console.log('Received id: ' + params.id);
      }
    });
  }

  timeConverter(unix_timestamp): string{
    const a = new Date(unix_timestamp * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
}
