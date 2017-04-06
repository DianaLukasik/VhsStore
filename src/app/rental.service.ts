import { Injectable } from '@angular/core';

import { Vhs } from './vhs';
import { TAPES } from './mock-tapes';

@Injectable()
export class RentalService {
    getTapes(): Promise<Vhs[]> {
        return Promise.resolve(TAPES);
    }

getVhs(id: number): Promise<Vhs> {
    return this.getTapes()
               .then(tapes => tapes.find(vhs => vhs.id === id));
  }
}