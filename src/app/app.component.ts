import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
<h1><img src="img/test/mchammer.gif">     {{pageName}}     <img src="img/test/mchammer.gif"></h1>
      <a [routerLink]="['/tapes']" class="tittle">All VHS tapes </a>
      <a [routerLink]="['/rented']" class="tittle"> Rented</a>
       <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
          <div class="container">
            <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
      <a [routerLink]="['/tapes']" class="tittle">All VHS tapes </a>
      <a [routerLink]="['/rented']" class="tittle"> Rented</a>
            <div class="nav-collapse collapse">
            </div>
          </div>
        </div>
      </div>
   <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageName = 'VHS STORE';

  doSomething() {
    return  'done';
  }
}


