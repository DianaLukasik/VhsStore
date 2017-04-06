import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
//czy tu bootstrapa doimportowac, zainstalownay juz jest


import { AppComponent }  from './app.component';
import { VhsDetailComponent } from './vhs-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, VhsDetailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
