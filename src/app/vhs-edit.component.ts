import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { RentalService } from './rental.service';
import { Vhs } from './vhs';

@Component({
  selector: 'vhs-edit',
  templateUrl: './vhs-edit.component.html',
// template: `
//      <div *ngIf="vhs">
//       <h2>{{vhs.title}} details!</h2>
//       <div><label>id: </label>{{vhs.id}}</div>
//       <div>
//         <label>title: </label>
//         <input [(ngModel)]="vhs.title" placeholder="title"/>
//       </div>
//       <button (click)="goBack()">Back</button>
//     </div>
//      `
})
export class VhsEditComponent implements OnInit{
     @Input() vhs: Vhs;


constructor(
    private rentalService: RentalService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


 ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.rentalService.getVhs(+params['id']))
            .subscribe(vhs => this.vhs = vhs);
    } 

  save(): void {
    this.rentalService.update(this.vhs)
      .then(() => this.goBack());
  }

goBack(): void {
  this.location.back();
}
 
}