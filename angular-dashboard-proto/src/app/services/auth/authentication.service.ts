import { FiltersStateService } from './../filters/filters.state';
import { FiltersListService } from '../filters/filters-list.service';
import { Injectable } from '@angular/core';
import { OperatorUser } from './../../swagger/model/OperatorUser';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Configuration } from '../../../app/swagger/configuration';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public account: OperatorUser; // user's infos
  public accountJWT: any; // user's infos jwt

  constructor(private cookieService: CookieService,
    private router: Router,
    private swaggerConfig: Configuration,
    private filtersListService: FiltersListService, 
    private filtersStateService: FiltersStateService) { }

  logVerify() {
    
    if (JSON.parse(localStorage.getItem('user')) && this.cookieService.get('token')) {
      const token = this.cookieService.get('token');
      this.swaggerConfig.accessToken = token;
      this.router.navigate(['/home']);
    } else {
      this.logOut();
    }
  }

  logOut() {

    this.router.navigate(['/login']);
    this.cookieService.get('token') && this.cookieService.delete('token');
    JSON.parse(localStorage.getItem('user')) && localStorage.removeItem('user');

    this.swaggerConfig.accessToken = null;

    this.filtersStateService.resetState$();
    this.filtersListService.deleteAllFilters();

  }

  storeLogInInfos(value) {

    this.account = {... value};
    delete this.account.token;

    this.accountJWT = value.token;

    this.storeLogInfosInNavigator(this.account, this.accountJWT);
    
    this.router.navigate(['/home']);
  }

  storeLogInfosInNavigator(account, accountJWT) {

    this.cookieService.set('token', accountJWT);
    localStorage.setItem('user', JSON.stringify(account));
  }

}
