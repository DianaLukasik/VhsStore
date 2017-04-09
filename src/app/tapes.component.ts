import { Component, OnInit, Input } from '@angular/core';
import { Vhs } from './vhs';
import { RentalService } from './rental.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';




@Component({
  selector: 'my-tapes',
  templateUrl: './tapes.component.html',
  styleUrls: ['./tapes.component.css']
})

export class TapesComponent implements OnInit {
  @Input() filterBy: string;

  tapes: Vhs[];
  selectedVhs: Vhs;

  constructor(
    private router: Router,
    private rentalService: RentalService) { }


  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.rentalService.create(title)
      .then(vhs => {
        this.tapes.push(vhs);
        this.selectedVhs = null;
      });
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

  // For sorting
  // ngOnChanges(){
  //   if (this.tapes) {
  //     this.sortBy === 'title' ? this.tapes.sort(sortByTitleAsc) : this.tapes.sort(sortByYearDesc);
  //   }
  // }

}

function sortByTitleAsc (vhs1: Vhs, vhs2: Vhs){
  if(vhs1.title > vhs2.title) return 1
  else if (vhs1.title === vhs2.title) return 0
  else return -1
}