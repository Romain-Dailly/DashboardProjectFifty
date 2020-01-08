import { FiltersStateService } from '../../../../services/filters/filters.state';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-activity-selector',
  templateUrl: './activity-selector.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./activity-selector.component.css']
})
export class ActivitySelectorComponent {

  
  @Input()data;
  @Input()text;
  
  private activity = new FormControl('all-all');
  
  constructor(private filtersStateService:FiltersStateService) { }
  
  setGeneralStore(selectedValue) {

    let newValue = selectedValue.value.split('-');
    if (newValue[1] === 'is20_feet'){
      newValue[1] = '20_feet'
    } else if (newValue[1] === 'is40_feet'){
      newValue[1] = '40_feet'
    }
      this.filtersStateService.setState$({
        timeFormat: this.data.filters.timeFormat,
        year: this.data.filters.year,
        month: this.data.filters.month,
        good_type:newValue[0],
        truck_types:newValue[1],
        customer: this.data.filters.customer,
        distances: this.data.filters.distances,
        driver: this.data.filters.driver,
        agency: this.data.filters.agency,
        vehicle: this.data.filters.vehicle
      });
  };

  ngOnChanges () {

    let truckAndGoodTypesJoined = [this.data.filters.good_type, this.data.filters.truck_types].join('-');
    this.activity = new FormControl(truckAndGoodTypesJoined);
  }
}
