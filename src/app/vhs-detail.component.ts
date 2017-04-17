import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { RentalService } from './rental.service';
import { Vhs } from './vhs';

@Component({
  selector: 'vhs-detail',
  templateUrl: './vhs-detail.component.html',

})
export class VhsDetailComponent implements OnInit{
     @Input() vhs: Vhs;
//     @Input() sortBy: string;


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