import { AuthenticationService } from './../../services/auth/authentication.service';
import { Component, OnInit, Input } from '@angular/core';
import { FiltersStateService } from '../../services/filters/filters.state';
import { LanguageService } from './../../services/language/language.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private translatedText
  @Input() dataFromStore;
  private isResetButtonDisabled: boolean = false;
  private isShownSidenav: boolean = false;

  constructor(private filtersStateService:FiltersStateService,
    private languageService:LanguageService,
    private authenticationService:AuthenticationService
  ) { }
  
  // Toggle sidenav
  setIsShownSidenav() {
    this.isShownSidenav = !this.isShownSidenav;
  }
  // Reset filters emitted by the reset button in view
  resetFilters () {
    this.filtersStateService.resetState$();
  }

  ngOnChanges() {
    (this.dataFromStore === this.filtersStateService.initialState) ?
    this.isResetButtonDisabled = true :
    this.isResetButtonDisabled = false;
  }
  ngOnInit() {
    this.translatedText = this.languageService.text;
  }

}
