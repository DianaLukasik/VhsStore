import { Component, OnInit, Input } from '@angular/core';
import { Vhs } from './vhs';
import { RentalService } from './rental.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { InMemoryDataService } from './in-memory-data.service';

import { Injectable } from '@angular/core';

import { FormsModule } from "@angular/forms"; 



@Component({
  selector: 'my-tapes',
  templateUrl: './tapes.component.html',
  styleUrls: ['./tapes.component.css']
})


export class TapesComponent implements OnInit {
  @Input() filterBy: string;

  tapes: Vhs[];
  selectedVhs: Vhs;
  model = new Vhs();
  sortType: string = 'id';


  constructor(
    private router: Router,
    private rentalService: RentalService) { }


  onSubmit() {
    this.model.rented = false;
    this.rentalService.create(this.model)
    this.ngOnInit();
    ;
  }

  newMovie() {
    this.model = new Vhs();
  }


  delete(vhs: Vhs): void {
    this.rentalService
      .delete(vhs.id)
      .then(() => {
        this.tapes = this.tapes.filter(h => h !== vhs);
        if (this.selectedVhs === vhs) { this.selectedVhs = null; }
      });
  }


  rent(vhs: Vhs): void {
    vhs.rented = !vhs.rented;
    this.rentalService.changeStatus(vhs).then(() => {
      this.tapes = this.tapes.filter(h => h !== vhs);
      if (this.selectedVhs === vhs) { this.selectedVhs = null; }
    });
  }

  getTapes(): void {
    this.rentalService.getTapes().then(tapes => this.tapes = tapes);
  }

  ngOnInit(): void {
    this.getTapes();
  }

  onSelect(vhs: Vhs): void {
    this.selectedVhs = vhs;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedVhs.id]);
  }


  sortBy(criteria: string): void {
    this.sortType = criteria;
  }



doSomething() {
return 'done';
} 


}

