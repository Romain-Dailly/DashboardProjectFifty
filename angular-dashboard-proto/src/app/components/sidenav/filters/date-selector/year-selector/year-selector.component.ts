import { Component, Input } from '@angular/core';

import { FiltersStateService } from '../../../../../services/filters/filters.state';
import { FormControl } from '@angular/forms';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDatepicker } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';

import {default as _rollupMoment, Moment} from 'moment';
import _moment from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS_FOR_YEARS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-year-selector',
  templateUrl: './year-selector.component.html',
  styleUrls: ['./year-selector.component.css'],
  providers: [

    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS_FOR_YEARS },
  ],
})
export class YearSelectorComponent {

  @Input() scale;
  @Input() filters;
  @Input() text;

  private dateYear = new FormControl({value:moment(), disabled:true});
  private minDate = localStorage.getItem('user') ? new Date(Number(moment(JSON.parse(localStorage.getItem('user')).carrier.createdAt))) : new Date(moment().subtract(2, 'years').format('YYYY'));
  private maxDate = new Date(Date.now());

  constructor(private filtersStateService:FiltersStateService) { }
  
  chosenYearHandler(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {

    const ctrlValue = this.dateYear.value;
    ctrlValue.year(normalizedYear.year());
    this.dateYear.setValue(ctrlValue);

    this.filtersStateService.setState$({
      timeFormat:'year',
      year:moment(this.dateYear.value).format('YYYY'),
      month:'0',
      good_type:this.filters.good_type,
      truck_types:this.filters.truck_types,
      customer:this.filters.customer,
      distances:this.filters.distances,
      driver:this.filters.driver,
      agency: this.filters.agency,
      vehicle:this.filters.vehicle
      });

    datepicker.close();
  }

  ngOnChanges () {
    this.dateYear = new FormControl({value:moment().set('year', this.filters.year), disabled:true});
  }

}
