import {Component, OnInit, Input} from '@angular/core';
import { FiltersStateService } from '../../../../services/filters/filters.state';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css'],
})
export class DateSelectorComponent implements OnInit {


  @Input() text;
  @Input() data;

  constructor(private filtersStateService:FiltersStateService) { }

  ngOnInit() {
    
  }


}



