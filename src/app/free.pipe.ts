import { Pipe, PipeTransform } from '@angular/core';
import { Vhs } from './vhs';

@Pipe({
    name: 'free'
})
export class FreePipe implements PipeTransform {

    transform(tapes: Vhs[]) {
        if (tapes == null) {
            return null;
        }
        return tapes.filter(vhs => !vhs.rented);
    }

}

