import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewEncapsulation} from '@angular/core';
import { FiltersStateService } from '../../../../services/filters/filters.state';

@Component({
  selector: 'app-trucks-selector',
  templateUrl: './trucks-selector.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./trucks-selector.component.css']
})
export class TrucksSelectorComponent {

  @Input()data;
  @Input()text;

  vehicle = new FormControl('all');
  
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
      driver:this.data.filters.driver,
      agency:this.data.filters.agency,
      vehicle:selectedValue.value
    });

  };

  ngOnChanges () {
    this.vehicle = new FormControl(this.data.filters.vehicle);
  }
}
