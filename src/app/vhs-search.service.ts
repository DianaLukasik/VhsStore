// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import { Vhs } from './vhs';

// @Injectable()
// export class VhsSearchService {
//     constructor(private http: Http) { }
    
//     search(term: string): Observable<Vhs[]> {
//         return this.http
//             .get(`app/tapes/?title=${term}`)
//             .map(response => response.json().data as Vhs[]);
//     }
// }