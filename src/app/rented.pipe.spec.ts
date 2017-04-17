import { TestBed, async } from '@angular/core/testing';
import { RentedPipe } from './rented.pipe';

describe('FreePipe', () => {
  it('create an instance', () => {
    const pipe = new RentedPipe();
    expect(pipe).toBeTruthy();
  });
});