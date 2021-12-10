import { Component } from '@angular/core';

@Component({
  selector: 'app-group',
  template: `<h1>{{title}}</h1>
             <nav>
               <ul>
                 <li>
                   <a routerLink="/getFlights">Flights overview</a>
                 </li>
                 <li>
                   <a routerLink="/addFlightForm">Add flight</a>
                 </li>
                 <li>
                   <a routerLink="/getCorridors">Corridors overview</a>
                 </li>
               </ul>
             </nav>
            <router-outlet></router-outlet>`
})

export class AppComponent {
  title = 'Groups';
}

