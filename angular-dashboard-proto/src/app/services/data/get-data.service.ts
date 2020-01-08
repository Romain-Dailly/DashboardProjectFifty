import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataFakerService } from './faker/data-faker.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  api_url = environment.API_URL;

  isDataFromAPI = environment.isDataFromAPI;

  private turnoverUrl:string;
  private ordersCountUrl:string;
  private kmPricesUrl:string;
  private fillingRatesUrl:string;
  private ordersListUrl: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    withCredentials: true
  };

  constructor(
    private http:HttpClient, 
    private faker:DataFakerService) { }


  /**Set requests urls*/
  setTurnoverUrl(user) {
    this.turnoverUrl = `${this.api_url}turnover/user/${user}`;
  }

  setOrdersCountUrl(user) {
    this.ordersCountUrl = `${this.api_url}orderscount/user/${user}`;
  }

  setKmPricesUrl(user) {
    this.kmPricesUrl = `${this.api_url}kmprice/user/${user}`;
  }

  setFillingRatesUrl(user) {
    this.fillingRatesUrl = `${this.api_url}fillingrate/user/${user}`;
  }

  setOrdersListUrl(user) {
    this.ordersListUrl = `${this.api_url}orderslist/user/${user}`;
  }
   

  /**Data for charts*/
  getTurnoverData$ (filters):Observable<Object> {

    let { timeFormat, year, month } = filters;
    
    let monthIndex = Number(month) > 0 ? month - 1 : 0;

    if (this.isDataFromAPI) {
      let userId = JSON.parse(localStorage.getItem('user')).user.id;
      this.setTurnoverUrl(userId);
  
      return this.http.post(this.turnoverUrl, filters, this.httpOptions)
    }
    console.log('localDev');
    return this.faker.generateFakeDataForTurnoverBarChartYearOrMonth$(timeFormat, monthIndex);

  }

  getOrdersCountData$ (filters):Observable<Object> {

    let { timeFormat, year, month } = filters;

    let monthIndex = Number(month) > 0 ? month - 1 : 0;

    if (this.isDataFromAPI) {
      let userId = JSON.parse(localStorage.getItem('user')).user.id;
      this.setOrdersCountUrl(userId);
  
      return this.http.post(this.ordersCountUrl, filters, this.httpOptions)
    }
    console.log('localDev');
    return this.faker.generateFakeDataForOrdersCountPieChartYearOrMonth$(timeFormat, monthIndex);

  }

  getKmPricesData$(filters):Observable<Object> {

    let { timeFormat, year, month } = filters;

    let monthIndex = Number(month) > 0 ? month - 1 : 0;

    if (this.isDataFromAPI) {
      let userId = JSON.parse(localStorage.getItem('user')).user.id;
      this.setKmPricesUrl(userId);
  
      return this.http.post(this.kmPricesUrl, filters, this.httpOptions)
    }
    console.log('localDev');
    return this.faker.generateFakeDataForKmPricesChartYearOrMonth$(timeFormat, monthIndex);

  }

  getFillingRatesData$(filters):Observable<Object> {

    let { timeFormat, year, month } = filters;

    let monthIndex = Number(month) > 0 ? month - 1 : 0;

    if (this.isDataFromAPI) {
      let userId = JSON.parse(localStorage.getItem('user')).user.id;
      this.setFillingRatesUrl(userId);
  
      return this.http.post(this.fillingRatesUrl, filters, this.httpOptions)
    }
    console.log('localDev');
    return this.faker.generateFakeDataForFillingRatesChartYearOrMonth$(timeFormat, monthIndex);

  }

  /**Get orders for the chosen period cell */
  getOrdersList$(filters, index):Observable<Object> {
    let userId = JSON.parse(localStorage.getItem('user')).user.id;
    this.setOrdersListUrl(userId);
    filters.index = index;

    return this.http.post(this.ordersListUrl, filters, this.httpOptions)

  }

};