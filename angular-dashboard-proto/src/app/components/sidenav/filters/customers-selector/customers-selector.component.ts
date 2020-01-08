import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewEncapsulation} from '@angular/core';
import { FiltersStateService } from '../../../../services/filters/filters.state';

@Component({
  selector: 'app-customers-selector',
  templateUrl: './customers-selector.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./customers-selector.component.css']
})
export class CustomersSelectorComponent {

  customer = new FormControl('all');

  @Input()data;
  @Input()text;

  constructor(private filtersStateService:FiltersStateService) { }

  setGeneralStore(selectedValue) {

    this.filtersStateService.setState$({

        timeFormat: this.data.filters.timeFormat,
        year: this.data.filters.year,
        month: this.data.filters.month,
        good_type:this.data.filters.good_type,
        truck_types:this.data.filters.truck_types,
        customer: selectedValue.value,
        distances: this.data.filters.distances,
        driver: this.data.filters.driver,
        agency: this.data.filters.agency,
        vehicle: this.data.filters.vehicle
    });

  };

  ngOnChanges () {
    this.customer = new FormControl(this.data.filters.customer);
  }

}
