import { Pipe, PipeTransform } from '@angular/core';
import { Vhs } from './vhs';

@Pipe({
    name: 'rented'
})
export class RentedPipe implements PipeTransform {

    transform(tapes: Vhs[]) {
                    if (tapes==null) {
      return null;
    }
        return tapes.filter(vhs => vhs.rented);
    }

}