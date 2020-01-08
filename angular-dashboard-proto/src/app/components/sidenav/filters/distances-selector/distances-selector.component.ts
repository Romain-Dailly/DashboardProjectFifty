import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';
import { FiltersStateService } from '../../../../services/filters/filters.state';

@Component({
  selector: 'app-distances-selector',
  templateUrl: './distances-selector.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./distances-selector.component.css']
})

export class DistancesSelectorComponent {

  @Input()data;
  @Input()text;

  private distances = new FormControl('all');
  
  constructor(private filtersStateService:FiltersStateService) { }


  setGeneralStore(selectedValue) {

    this.filtersStateService.setState$({
      timeFormat:this.data.filters.timeFormat,
      year:this.data.filters.year,
      month:this.data.filters.month,
      good_type:this.data.filters.good_type,
      truck_types:this.data.filters.truck_types,
      customer:this.data.filters.customer,
      distances:selectedValue.value,
      driver:this.data.filters.driver,
      agency: this.data.filters.agency,
      vehicle:this.data.filters.vehicle
    });

  };

  ngOnChanges () {
    this.distances = new FormControl(this.data.filters.distances);
  }

}
