import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from'rxjs';
import { Filters } from '../../interfaces/filters.interface';
import { LanguageService } from './../language/language.service';
import moment from 'moment';
  
@Injectable({
  providedIn: 'root'
})
export class FiltersStateService {

  constructor(private languageService:LanguageService) { }

  public initialState: Filters = {
    filters:{
      timeFormat: 'year',
      year:moment().format('YYYY'),
      month:moment().format('MM'),
      good_type:'all',
      truck_types:'all',
      customer:'all',
      distances:'all',
      driver:'all',
      vehicle:'all',
      agency:'all',
      filterName:''
    }
  };

  /**Filters store with its initial state */
  private state$ = new BehaviorSubject<Filters>(this.initialState);

  getState$():Observable<Filters> {
    return this.state$.asObservable();
  }

  setState$(value) {
    this.state$.next({filters:value})
  }

  resetState$():void {
    this.state$.next(this.initialState)
  }
}



