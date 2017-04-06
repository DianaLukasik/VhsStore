import { Component, OnInit } from '@angular/core';
import { Vhs } from './vhs';
import { RentalService } from './rental.service'




@Component({
  selector: 'my-app',
  template:  `<h1>{{pageName}}</h1>
    <ul class="tapes">
      <li *ngFor="let vhs of tapes" 
      [class.selected]="vhs === selectedVhs"
      (click)="onSelect(vhs)">
  <div class="badge">{{vhs.title}}</div>
  <div>Genre: {{vhs.genre}}</div>
  <div>Director: {{vhs.director}}</div>
  <div>Stars: {{vhs.stars}}</div>
  <div>Year: {{vhs.year}}</div>
      </li>
    </ul>

    <vhs-detail [vhs]="selectedVhs"></vhs-detail>
    `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .tapes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }

    .tapes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .tapes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .tapes .text {
      position: relative;
      top: -3px;
    }
    .tapes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
   providers: [RentalService]
})

export class AppComponent implements OnInit{
  pageName = 'VHS Rental Shop';
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

