import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { RouterModule }   from '@angular/router';
//czy tu bootstrapa doimportowac, zainstalownay juz jest


import { AppComponent }  from './app.component';
import { VhsDetailComponent } from './vhs-detail.component';
import { TapesComponent }     from './tapes.component';
import { RentalService }         from './rental.service';
import { NavigationComponent }     from './navigation.component';




@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  RouterModule.forRoot([
  {
    path: 'tapes',
    component: TapesComponent
  },
  {
  path: 'navigation',
  component: NavigationComponent
},
{
  path: '',
  redirectTo: '/navigation',
  pathMatch: 'full'
},
{
  path: 'detail/:id',
  component: VhsDetailComponent
},
])
  ],
  declarations: [ AppComponent, 
  VhsDetailComponent, 
  TapesComponent,
  NavigationComponent],
  providers: [RentalService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
