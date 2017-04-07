import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';




import { AppComponent }  from './app.component';
import { VhsDetailComponent } from './vhs-detail.component';
import { TapesComponent }     from './tapes.component';
import { RentalService }         from './rental.service';
import { NavigationComponent }     from './navigation.component';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, 
  VhsDetailComponent, 
  TapesComponent,
  NavigationComponent],
  providers: [RentalService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
