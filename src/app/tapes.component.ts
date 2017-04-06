import { Component, OnInit } from '@angular/core';
import { Vhs } from './vhs';
import { RentalService } from './rental.service'
import { RouterModule }   from '@angular/router';




@Component({
  selector: 'my-tapes',
 templateUrl: './tapes.component.html',
  styleUrls: [ './tapes.component.css' ]
})

export class TapesComponent implements OnInit{
  
  tapes: Vhs [];
  selectedVhs: Vhs;

  constructor(private rentalService: RentalService) { }

    getTapes(): void {
    this.rentalService.getTapes().then(tapes => this.tapes = tapes);
  }

  ngOnInit(): void {
    this.getTapes();
  }

    onSelect(vhs: Vhs): void {
    this.selectedVhs = vhs;
  }

 }

