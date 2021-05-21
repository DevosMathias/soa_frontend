import {Component, OnInit} from '@angular/core';
import {Group} from './group';
import {timer} from 'rxjs';
import {GroupService} from './group.service';


@Component({
  selector: 'app-my-groups',
  templateUrl: './groups.component.html'
})

export class GroupsComponent implements OnInit {
  groups: Group[];

  constructor(private groupService: GroupService) {
  }

  getGroups(): void {
    timer(0, 2500)
      .subscribe(() => {
        this.groupService.getGroups()
          .subscribe(data => this.groups = data);
      });
  }

  ngOnInit(): void {
    this.getGroups();
  }

  remove(id): void {
    const idData = 'id=' + encodeURIComponent(id);
    this.groupService.deleteGroup(idData);
  }
}



