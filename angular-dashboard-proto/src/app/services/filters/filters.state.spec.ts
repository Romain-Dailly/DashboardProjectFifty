import { TestBed } from '@angular/core/testing';
import { FilterService } from './filters.state';
import { Observable, of } from 'rxjs';

describe('FilterService', () => {
  let service : FilterService;
  beforeEach(() => service = new FilterService());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getStore$() should return store$',()=>{
    expect(service.getStore$()).toEqual(service.store$);
  });
  it('setDateStore$(value) should set store$ date', (done: DoneFn)=> {
    let value = {
      format:'year',
      year:'2016',
      month:'2'
    }
    let store;
    service.setDateStore$(value);
    service.getStore$().subscribe(val=>store = val.timeScale);
    expect(store).toEqual(value);
    done();
  })
});
