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
            <a class="brand" href="rented">Rented tapes</a>
            <div class="nav-collapse collapse">
            </div>
          </div>
        </div>
      </div>

    <h1><img src="img/test/mchammer.gif">     {{pageName}}     <img src="img/test/mchammer.gif"></h1>




   <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageName = 'VHS STORE';
}