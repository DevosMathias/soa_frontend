import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {Corridor} from './corridor';
import {CorridorService} from './corridor.service';


@Component({
  selector: 'app-my-corridors',
  templateUrl: './corridors.component.html'
})

export class CorridorsComponent implements OnInit {
  corridors: Corridor[];

  constructor(private corridorService: CorridorService) {
  }

  getCorridors(): void {
    timer(0, 2500)
      .subscribe(() => {
        this.corridorService.getCorridors()
          .subscribe(data => this.corridors = data);
      });
  }

  ngOnInit(): void {
    this.getCorridors();
  }
}



