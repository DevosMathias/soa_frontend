import { Component } from '@angular/core';

@Component({
  selector: 'app-group',
  template: `<h1>{{title}}</h1>
             <nav>
               <ul>
                 <h2>Mathias</h2>
                 <li>
                   <a routerLink="/getFlights">Flights overview</a>
                 </li>
                 <li>
                   <a routerLink="/addFlightForm">Add flight</a>
                 </li>
                 <li>
                   <a routerLink="/getCorridors">Corridors overview</a>
                 </li>
                 <h2>Laurens</h2>
                 <li>
                   <a routerLink="/getUsers">User Overview</a>
                 </li>
                 <li>
                   <a routerLink="/addUser">Add User</a>
                 </li>
                 <li>
                   <a routerLink="/liveBoard">LiveBoard</a>
                 </li>
                 <h2>Arno</h2>
                 <li>
                   <a routerLink="/getBusses">Busses</a>
                 </li>
                 <li>
                   <a routerLink="/addBus">Add Bus</a>
                 </li>
                 <li>
                   <a routerLink="/getHaltes">Stops</a>
                 </li>
                 <li>
                   <a routerLink="/addStop">Add Stop</a>
                 </li>
                 <li>
                   <a routerLink="/getTTCStop">TTC Stop</a>
                 </li>
                 <h2>Jeroen</h2>
                 <li>
                   <a routerLink="/getDrives">Drives</a>
                 </li>
                 <li>
                   <a routerLink="/addDrive">add Drive</a>
                 </li>
                 <li>
                   <a routerLink="/updateDrive">update Drive</a>
                 </li>
               </ul>
             </nav>
            <router-outlet></router-outlet>`
})

export class AppComponent {
  title = 'Groups';
}

