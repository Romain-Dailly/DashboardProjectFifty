import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from './../../services/auth/authentication.service';
import { FiltersStateService } from '../../services/filters/filters.state';
import moment from 'moment';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  @Input() text;
  @Input() dataFromStore;

  private user;
  private userCreationDate;
  private isClicked = false;

  private areFiltersReset: boolean = false;

  constructor(private authenticationService: AuthenticationService, private filtersStateService:FiltersStateService) { }

  click() {
    this.isClicked = !this.isClicked;
  }

  logOut() {
    this.authenticationService.logOut();
  }

  // Reset all filters emitted by presets-selector changes value of areFiltersReset property
  setAreFiltersReset($event){
    $event === true && this.resetFilters();
    this.areFiltersReset = $event;
  }
  // Reset emitted by the reset button in view
  resetFilters () {
    this.areFiltersReset = true;
    this.filtersStateService.resetState$();
  }

  ngOnInit() {
    
  }
  ngOnChanges() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userCreationDate = moment(this.user.carrier.createdAt).format('DD-MM-YYYY');
    
  }

}
