import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import moment from 'moment';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root'
})
export class FiltersListService {

  private filtersUrl:string;
  private deleteFilterUrl: string;

  api_url = environment.API_URL;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    withCredentials: true
  };
  
  private isDataFromAPI = environment.isDataFromAPI;

  private initialFilter = {
    filters : {
      timeFormat:'year',
      year:moment().format('YYYY'),
      month:moment().format('MM'),
      good_type:'all',
      truck_types:'all',
      customer:'all',
      distances:'all',
      driver:'all',
      vehicle:'all',
      agency:'all',
      filterName: this.languageService.text.filters.presets.defaultName
    }
  };
  private filtersList:any[] = [this.initialFilter];

  constructor(private languageService:LanguageService, private http:HttpClient) { }


  /**Handle filters from api*/
  setFiltersUrl(user, filterId) {
    this.filtersUrl = `${this.api_url}filters/user/${user}`;
    this.deleteFilterUrl = `${this.api_url}filters/${filterId}/user/${user}`;
  }

  /**Filters in api*/
  createFilter(body) {
    let userId = JSON.parse(localStorage.getItem('user')).user.id;
    this.setFiltersUrl(userId, null);

    let finalFilters = body.filters;
    finalFilters.userId = userId;

    return this.http.post(this.filtersUrl, finalFilters, this.httpOptions);
  }

  updateFilter(body) {
    let userId = JSON.parse(localStorage.getItem('user')).user.id;
    this.setFiltersUrl(userId, null);

    let finalFilters = body.filters;
    finalFilters.userId = userId;

    return this.http.put(this.filtersUrl, finalFilters, this.httpOptions);
  }

  getFilters() {

    let userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).user.id : null;
    this.setFiltersUrl(userId, null);

    return this.http.get(this.filtersUrl, this.httpOptions);
  }

  deleteFilter(body) {
    let userId = JSON.parse(localStorage.getItem('user')).user.id;
    this.setFiltersUrl(userId, body.filters.id);

    return this.http.delete(this.deleteFilterUrl, this.httpOptions);
  }


  /**Handle local list*/
  setFiltersListWithFiltersFromApi(filters) {

    this.deleteAllFilters();
    filters.map(filter => {
      this.filtersList.push({ filters: filter });
    });
  }

  deleteAllFilters() {
    this.filtersList = [];
    this.filtersList.push(this.initialFilter);
  }

  setList (filter) {
    this.filtersList.push({filters: filter});
  }

  getList() {
    return this.filtersList;
  }

  modifyItem(index, newValue) {
    this.filtersList[index] = newValue;
  }

  deleteItem(index) {
    this.filtersList.splice(index, 1);
  }
}
