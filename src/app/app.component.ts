import { Component } from '@angular/core';
import { RouterModule }   from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
       <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
          <div class="container">
            <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="brand" href="tapes">Movie list</a>
            <a class="brand" href="#">Rented tapes</a>
            <div class="nav-collapse collapse">
            </div>
          </div>
        </div>
      </div>

    <h1>{{pageName}}</h1>
    <nav>
   <button routerLink="/tapes" routerLinkActive="active">Tapes</button>
   <button routerLink="/navigation" routerLinkActive="active">Navigation</button>
   </nav>
   <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageName = 'VHS STORE';
}