import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewEncapsulation} from '@angular/core';
import { FiltersStateService } from '../../../../services/filters/filters.state';

@Component({
  selector: 'app-drivers-selector',
  templateUrl: './drivers-selector.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./drivers-selector.component.css']
})

export class DriversSelectorComponent {

  @Input()data;
  @Input()text;

  driver = new FormControl('all');

  constructor(private filtersStateService:FiltersStateService) { }

  setGeneralStore(selectedValue) {

    this.filtersStateService.setState$({
      timeFormat:this.data.filters.timeFormat,
      year:this.data.filters.year,
      month:this.data.filters.month,
      good_type:this.data.filters.good_type,
      truck_types:this.data.filters.truck_types,
      customer:this.data.filters.customer,
      distances:this.data.filters.distances,
      agency: this.data.filters.agency,
      driver: selectedValue.value,
      vehicle:this.data.filters.vehicle
    });

  };

  ngOnChanges () {
    this.driver = new FormControl(this.data.filters.driver);
  }

}
