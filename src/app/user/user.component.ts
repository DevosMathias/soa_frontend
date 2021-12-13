import { Component, OnInit } from '@angular/core';
import {User} from '../user/user';
import {StationService} from '../station/station.service';
import {timer} from 'rxjs';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  getUsers(): void {
    timer(0, 20000)
      .subscribe(() => {
        this.userService.allUsers()
          .subscribe(data => {
            this.users = data;
            console.log('response: ' + this.userService.allUsers());
            console.log(this.users);
          });
      });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  remove(id): void {
    this.userService.deleteUser(encodeURIComponent(id));
    this.getUsers();
  }

  addFavorite(userid, stationid): void {
    this.userService.addFavorite(userid, stationid);
    this.getUsers();
  }
  getLiveBoardLink(id: string[]): string{
    let outstring = '';
    for (let i = 0; i < id.length; i++) {
      outstring += '<a href="/liveBoard?id=' + id[i] + '">' + id[i] + '</a>, ';
    }
    return outstring;
  }

}
