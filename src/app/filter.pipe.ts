import { Pipe, PipeTransform } from '@angular/core'
import { Vhs } from './vhs';

@Pipe({
    name: 'filter'
})
export class MovieFilterPipe implements PipeTransform {
    transform(value: Vhs[], filterBy: string): Vhs[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((vhs: Vhs) =>
            vhs.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}