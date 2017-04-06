import { Component, Input } from '@angular/core';
import { Vhs } from './vhs';

@Component({
  selector: 'vhs-detail',
template: `
     <div *ngIf="vhs">
      <h2>{{vhs.title}} details!</h2>
      <div><label>id: </label>{{vhs.id}}</div>
      <div>
        <label>title: </label>
        <input [(ngModel)]="vhs.title" placeholder="title"/>
      </div>
    </div>
     `
})
export class VhsDetailComponent {
     @Input() vhs: Vhs;
}