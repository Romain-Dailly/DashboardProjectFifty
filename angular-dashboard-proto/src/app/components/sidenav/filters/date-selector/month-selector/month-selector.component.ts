import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { FiltersStateService } from '../../../../../services/filters/filters.state';
import { FormControl } from '@angular/forms';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDatepicker } from '@angular/material/datepicker';

import _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';


_moment.locale(environment.language);

const moment = _rollupMoment || _moment;

// Dates formats for datePicker
export const MY_FORMATS = {
  parse: {
    dateInput: 'MMMM',
  },
  display: {
    dateInput: 'MMMM',
    monthYearLabel: 'MMMM',
    monthYearA11yLabel: 'MMMM',
  },
};

@Component({
  selector: 'app-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.css'],
  providers: [

    { provide: DateAdapter, useClass: MomentDateAdapter },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },

    { provide: MAT_DATE_LOCALE, useValue: environment.language }
  ],
})

export class MonthSelectorComponent implements OnInit {

  @Input() filters;
  @Input() text;

  private dateMonth = new FormControl({value:moment(), disabled:true});
  
  private startDate ;

  constructor(private filtersStateService:FiltersStateService) { }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {

    this.dateMonth.setValue(moment());
    const ctrlValue = this.dateMonth.value;
    ctrlValue.month(normalizedMonth.month());
    this.dateMonth.setValue(ctrlValue);
    datepicker.close();

    this.filtersStateService.setState$({
      timeFormat:'month',
      year:this.filters.year,
      month:moment(this.dateMonth.value).format('MM'),
      good_type:this.filters.good_type,
      truck_types:this.filters.truck_types,
      customer:this.filters.customer,
      distances:this.filters.distances,
      driver:this.filters.driver,
      agency: this.filters.agency,
      vehicle:this.filters.vehicle
    })

  }

  monthValueChanged(currentChanges) {
    currentChanges.timeFormat === 'month' ? this.dateMonth.setValue(moment().set('month', Number(this.filters.month) - 1)) : this.dateMonth.setValue(undefined);
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.monthValueChanged(changes.filters.currentValue);
    this.startDate = localStorage.getItem('user') ? new Date(Number(moment(JSON.parse(localStorage.getItem('user')).carrier.createdAt))) : moment().set('year', Number(this.filters.year));
  }

}
