import { Component } from '@angular/core';

@Component({
  selector: 'app-group',
  template: `<h1>{{title}}</h1>
             <nav>
               <ul>
                 <li>
                   <a routerLink="/groupOverview">Group overview</a>
                 </li>
                 <li>
                   <a routerLink="/addGroupForm">Add group</a>
                 </li>
               </ul>
             </nav>
            <router-outlet></router-outlet>`
})

export class AppComponent {
  title = 'Groups';
}

