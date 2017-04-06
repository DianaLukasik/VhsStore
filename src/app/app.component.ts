import { Component } from '@angular/core';
import { RouterModule }   from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{pageName}}</h1>
    <nav>
   <a routerLink="/tapes">Tapes</a>
   <a routerLink="/navigation">Navigation</a>
   </nav>
   <router-outlet></router-outlet>
  `
 
})
export class AppComponent {
  pageName = 'VHS Rental Shop';
}