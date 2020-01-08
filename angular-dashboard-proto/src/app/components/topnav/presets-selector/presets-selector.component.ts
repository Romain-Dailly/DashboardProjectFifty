import { AuthenticationService } from '../../../services/auth/authentication.service';
import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { FiltersStateService } from '../../../services/filters/filters.state';
import { FiltersListService } from '../../../services/filters/filters-list.service';
import { FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
// import moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presets-selector',
  templateUrl: './presets-selector.component.html',
  styleUrls: ['./presets-selector.component.css']
})
export class PresetsSelectorComponent implements OnInit {

  @Input() text;
  @Input() storeFilters;
  @Input() areFiltersReset;
  @Output() setAreFiltersReset =  new EventEmitter();

  // store changes from filters store
  private changesInStore;
  private filtersList: any[];

  private isButtonToModify = false;
  private isButtonDisabled: boolean = false;
  private isCreatedFilterSelected: boolean = false;

  private filterState = new FormControl('0');

  constructor(private filtersStateService:FiltersStateService,
    private filtersListService:FiltersListService,
    private snackBar: MatSnackBar,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
    ) { }

  // When filter is selected (selectedValue)
  setGeneralStore(selectedValue) {
    
    if (selectedValue.value === '0') {
      this.setAreFiltersReset.emit(true);
    } else {
      this.setAreFiltersReset.emit(false);
      this.filtersStateService.setState$({
        timeFormat: this.filtersList[selectedValue.value].filters.timeFormat,
        year: this.filtersList[selectedValue.value].filters.year,
        month: this.filtersList[selectedValue.value].filters.month,
        good_type:this.filtersList[selectedValue.value].filters.good_type,
        truck_types:this.filtersList[selectedValue.value].filters.truck_types,
        customer: this.filtersList[selectedValue.value].filters.customer,
        distances: this.filtersList[selectedValue.value].filters.distances,
        driver: this.filtersList[selectedValue.value].filters.driver,
        agency: this.filtersList[selectedValue.value].filters.agency,
        vehicle: this.filtersList[selectedValue.value].filters.vehicle
      });
    }
    
  }

  // Handle filter creation from dialogBox
  newFilterCreated() {
    if (JSON.parse(localStorage.getItem('user')) !== null) {

      this.filtersListService.getFilters().subscribe(data => {
        this.filtersListService.setFiltersListWithFiltersFromApi(data);
        this.filtersList = this.filtersListService.getList();
        this.filterState = new FormControl(`${this.filtersList.length - 1}`);
        this.setIsButtonDisabled();
        this.setIsCreatedFilterSelected();
        this.setIsButtonToModify();
      });
    }
  }

  // Handle click on modify
  modifyFilter () {
    
    //Add API needed properties to a copy of store filters
    let modifiedFilter = {...this.changesInStore};
    modifiedFilter.filters.filterName = this.filtersList[this.filterState.value].filters.filterName;
    modifiedFilter.filters.id = this.filtersList[this.filterState.value].filters.id;
    modifiedFilter.filters.userId = this.filtersList[this.filterState.value].filters.userId;

    this.filtersListService.updateFilter(modifiedFilter).subscribe(
      data => {

        this.filtersListService.modifyItem(this.filterState.value, {filters: data});
        this.setAreFiltersReset.emit(false);
        this.filtersList = this.filtersListService.getList();
        this.setIsButtonDisabled();
        this.openSnackBar(`${modifiedFilter.filters.filterName} ${this.text.presets.SnackFilterModified} !`, '');
      },
      error => { 

        console.log(error);
        this.authenticationService.logOut();
      }
    );
  }

  //Handle filter deletion
  deleteFilter() {

    if (this.filterState.value !== '0') {
      this.filtersListService.deleteFilter(this.filtersList[this.filterState.value]).subscribe(
        data => {
          let TempFilterName = this.filtersList[this.filterState.value].filters.filterName;

          this.filtersListService.deleteItem(this.filterState.value);
          this.setAreFiltersReset.emit(true);
          this.filterState = new FormControl('0');
          this.setIsButtonToModify();
          this.openSnackBar(`${TempFilterName} ${this.text.presets.SnackFilterDeleted} !`, '');
        },
        error => {

          console.log(error);
        }
      );
    }  
  }
  
  // Set isCreatedFilterSelected property to show delete trash or not
  setIsCreatedFilterSelected () {

    this.filterState.value === '0'?
    this.isCreatedFilterSelected = false :
    this.isCreatedFilterSelected = true;
  }
  
  // Set if button to create or button to modify must be shown
  setIsButtonToModify() {
    
    if (this.isCreatedFilterSelected === true) {
      this.isButtonToModify = true;
    } else {
      this.isButtonToModify = false;
    }
  }

  // Set isButtonDisabled property to disable buttons or not
  setIsButtonDisabled() {

    let itemSelectedStoreValue = { ... this.changesInStore };
    
    if (
      (itemSelectedStoreValue.filters.timeFormat === this.filtersList[this.filterState.value].filters.timeFormat) &&
      (itemSelectedStoreValue.filters.year === this.filtersList[this.filterState.value].filters.year) &&
      (itemSelectedStoreValue.filters.month === this.filtersList[this.filterState.value].filters.month) &&
      (itemSelectedStoreValue.filters.good_type === this.filtersList[this.filterState.value].filters.good_type) &&
      (itemSelectedStoreValue.filters.truck_types === this.filtersList[this.filterState.value].filters.truck_types) &&
      (itemSelectedStoreValue.filters.customer === this.filtersList[this.filterState.value].filters.customer) &&
      (itemSelectedStoreValue.filters.distances === this.filtersList[this.filterState.value].filters.distances) &&
      (itemSelectedStoreValue.filters.driver === this.filtersList[this.filterState.value].filters.driver) &&
      (itemSelectedStoreValue.filters.vehicle === this.filtersList[this.filterState.value].filters.vehicle)
      ) {
        this.isButtonDisabled = true;
    } else {
        this.isButtonDisabled = false;
    }
  }
    
  // Notification
  openSnackBar(message: string, action :string) {
    this.snackBar.open(message, action, {duration : 4000});
  }

  ngOnInit() { 
    
  }
  
  ngOnChanges(changes: SimpleChanges) {
    localStorage.getItem('user') && (this.filtersList = this.filtersListService.getList());
            
    this.changesInStore = changes.storeFilters.currentValue;
    this.setIsButtonDisabled();

    this.setIsCreatedFilterSelected();
    this.setIsButtonToModify();

    // Handle reset button
    if (this.areFiltersReset || this.changesInStore === this.filtersStateService.initialState) {
      this.filterState = new FormControl('0');
      this.setIsCreatedFilterSelected();
      this.setIsButtonToModify();
      this.setIsButtonDisabled();
    } 
  } 
}
