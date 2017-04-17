

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Vhs } from './vhs';
import { TAPES } from './mock-tapes';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class RentalService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private tapesUrl = 'api/tapes';  

  constructor(private http: Http) { }

  getTapes(): Promise<Vhs[]> {
    return this.http.get(this.tapesUrl)
               .toPromise()
               .then(response => response.json().data as Vhs[])
               .catch(this.handleError);
  }


  getVhs(id: number): Promise<Vhs> {
    const url = `${this.tapesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Vhs)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.tapesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

    create(vhs: Vhs): Promise<Vhs> {
    return this.http
      .post(this.tapesUrl, JSON.stringify(vhs), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Vhs)
      .catch(this.handleError);
  }

  update(vhs: Vhs): Promise<Vhs> {
    const url = `${this.tapesUrl}/${vhs.id}`;
    console.log("update poszedl")
    return this.http
      .put(url, JSON.stringify(vhs), {headers: this.headers})
      .toPromise()
      .then(() => vhs)
      .catch(this.handleError);
  }


changeStatus(vhs: Vhs): Promise<Vhs> {
    const url = `${this.tapesUrl}/${vhs.id}`;
    return this.http
      .put(url, JSON.stringify(vhs), {headers: this.headers})
      .toPromise()
      .then(() =>vhs)
      .catch(this.handleError);
  } 

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}

