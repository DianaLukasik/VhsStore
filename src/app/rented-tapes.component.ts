
import { Component, OnInit } from '@angular/core';
import { Vhs } from './vhs';
import { RentalService } from './rental.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'my-rented',
  templateUrl: './rented-tapes.component.html',
  styleUrls: ['./tapes.component.css']
})

export class RentedTapesComponent implements OnInit {


  tapes: Vhs[] = [];
  selectedVhs: Vhs;
  basePayment: number = 5;
  delayPenalty: number = 3;
  unrewindedPenalty: number = 3;
  brokenPenalty: number = 25;
  payment: number;

  constructor(
    private router: Router,
    private rentalService: RentalService) { }


  delete(vhs: Vhs): void {
    this.rentalService
      .delete(vhs.id)
      .then(() => {
        this.tapes = this.tapes.filter(h => h !== vhs);
        if (this.selectedVhs === vhs) { this.selectedVhs = null; }
      });
  }


  free(vhs: Vhs): void {
    vhs.rented = !vhs.rented;
    this.rentalService.update(vhs).then(() => {
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


  calculatePayment(delay: boolean, unrewinded: boolean, broken: boolean, ) {
    var payment = this.basePayment;
    if (delay) {
      payment += this.delayPenalty;
    }
    if (unrewinded) {
      payment += this.unrewindedPenalty;
    }
    if (broken) {
      payment += this.brokenPenalty;
    }
    return payment;
  }

}

