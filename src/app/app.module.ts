import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { VhsDetailComponent } from './vhs-detail.component';
import { VhsEditComponent } from './vhs-edit.component';
import { TapesComponent }     from './tapes.component';
import { RentalService }         from './rental.service';
import { RentedTapesComponent }     from './rented-tapes.component';
import { MovieFilterPipe } from './filter.pipe';
import { RentedPipe } from './rented.pipe';
import { FreePipe } from './free.pipe';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [ AppComponent, 
  VhsDetailComponent, 
  VhsEditComponent, 
  TapesComponent,
  RentedTapesComponent,
  MovieFilterPipe,
  RentedPipe,
  FreePipe],
  providers: [RentalService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
