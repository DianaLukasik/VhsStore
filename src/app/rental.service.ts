import { Injectable } from '@angular/core';

import { Vhs } from './vhs';
import { TAPES } from './mock-tapes';

@Injectable()
export class RentalService {
    getTapes(): Promise<Vhs[]> {
        return Promise.resolve(TAPES);
    }
}