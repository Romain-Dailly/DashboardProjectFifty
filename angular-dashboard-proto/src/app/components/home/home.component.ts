import { FiltersListService } from '../../services/filters/filters-list.service';
import { TURNOVER_BAR_CHART, ORDERS_COUNT_PIE_CHART, FILLING_RATES_CHART, KM_PRICES_CHART } from '../../services/charts-options/charts-options';
import { Component, OnInit, Input } from '@angular/core';
import { GetDataService } from '../../services/data/get-data.service';
import { FiltersStateService } from '../../services/filters/filters.state';
import { LanguageService } from '../../services/language/language.service';
import { AuthenticationService } from './../../services/auth/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // All language
  private translatedText;

  // Orders List corresponding to the dates of data
  private subscriptionToOrdersList$;
  private ordersList: any[];
  private showOrdersList = false;

  // Home page loadings
  private isLoading:boolean=true;
  private isTurnoverChartLoading=true;
  private isKmPricesChartLoading = true;
  private isOrdersCountPieChartLoading = true;

  // Filters
  private dataFromStore;

  // Title on hover for all charts
  private titleOnHover;
  // Data for turnover bar chart
  private subscriptionToTurnoverBarChart$;
  private titleForTurnoverBarChart;
  private labelsForTurnoverBarChart;
  private dataForTurnoverBarChart:any[];
  private optionsForTurnoverBarChart = TURNOVER_BAR_CHART;
  private widthForTurnoverBarChart='500';
  private heightForTurnoverBarChart='300';
  private ForTurnoverBarChart;
  private dataTypesForTurnoverBarChart;
  private colorsForTurnoverBarChart=[
    {
      borderColor: 'RGBA(54, 255, 95, 0.7)',
      backgroundColor: 'RGBA(54, 255, 95, 0.4)'
    },
  ];
  
  // Data for OrdersCountPieChart //
  private subscriptionToOrdersCountPieChart$;
  private titleForOrdersCountPieChart;
  private labelsForOrdersCountPieChart;
  private dataForOrdersCountPieChart;
  private optionsForOrdersCountPieChart = ORDERS_COUNT_PIE_CHART;

  // Data for kmPricesChart 
  private subscriptionToKmPricesChart$;
  private widthForKmPricesChart='400';
  private heightForKmPricesChart='300';
  private labelsForKmPricesChart;
  private titleForKmPricesChart;
  private dataTypesForKmPricesChart;
  private colorsForKmPricesChart=[
    {
      borderColor: 'RGBA(54, 212, 133, 0.8)',
      backgroundColor: 'RGBA(54, 212, 133, 0.2)',
    },
    {
      borderColor: 'RGBA(54, 255, 95, 0.8)',
      backgroundColor: 'RGBA(54, 255, 95, 0.2)'
    },
  ];
  private optionsForKmPricesChart = KM_PRICES_CHART;
  private dataForKmPricesChart;

  // Data for fillingRatesChart 
  private subscriptionToFillingRatesChart$;
  isFillingRatesChartLoading = true;
  private widthForFillingRatesChart='400';
  private heightForFillingRatesChart='300';
  private labelsForFillingRatesChart;
  private titleForFillingRatesChart;
  private dataTypesForFillingRatesChart;
  private colorsForFillingRatesChart=[
    {
      borderColor: 'RGBA(54, 212, 133, 0.8)',
      backgroundColor: 'RGBA(54, 212, 133, 0.2)',
    },
    {
      borderColor: 'RGBA(54, 255, 95, 0.8)',
      backgroundColor: 'RGBA(54, 255, 95, 0.2)'
    },
  ];
  private optionsForFillingRatesChart = FILLING_RATES_CHART;
  private dataForFillingRatesChart;
  

  constructor(
    private getDataService:GetDataService, 
    private filtersStateService:FiltersStateService,
    private languageService:LanguageService,
    private authenticationService: AuthenticationService,
    private filtersListService: FiltersListService
    ) {}

  // Event to show or not OrdersList
  orderListToFalse($event) {
  this.showOrdersList = $event;
  }
  // Event that gives the index of the data ordersList to show and pass it to api request
  setOrdersToShow($event) {
    this.ordersList = undefined;
    this.showOrdersList = true;
    this.subscriptionToOrdersList$ !== undefined && this.subscriptionToOrdersList$.unsubscribe();

    let orders;
    this.subscriptionToOrdersList$ = this.getDataService.getOrdersList$(this.dataFromStore.filters, $event).subscribe(
      data => {
        orders = data;
        this.ordersList = orders;  
      },

      error => {
      console.log(error);
    });
  }


  getDataTurnoverBarChart(params) {
    
    let dataForTurnoverBarChart;
    this.dataForTurnoverBarChart = undefined;
    this.isTurnoverChartLoading = true;

    this.subscriptionToTurnoverBarChart$ !== undefined && this.subscriptionToTurnoverBarChart$.unsubscribe();

    this.subscriptionToTurnoverBarChart$ = this.getDataService.getTurnoverData$(params).subscribe(
      data => {
        dataForTurnoverBarChart = data;

        this.dataForTurnoverBarChart = [
          dataForTurnoverBarChart.dates,
          dataForTurnoverBarChart.seizedOrdersSellPrices
        ];

        if (dataForTurnoverBarChart.totalSeizedOrdersSellPrice === null) {
          this.titleForTurnoverBarChart = `${this.translatedText.turnoverBarChart.title2} ${this.translatedText.unset}`;
        } 
        this.titleForTurnoverBarChart = `${this.translatedText.turnoverBarChart.title2} ${Number(dataForTurnoverBarChart.totalSeizedOrdersSellPrice).toFixed(2)} ${this.translatedText.units.euros}`;
        this.isTurnoverChartLoading = false;
      },

      error => {
      console.log(error);
    });
  }

  getDataKmPricesChart(params) {

    let dataKmPricesChart;
    this.dataForKmPricesChart = undefined;
    this.isKmPricesChartLoading = true;

    this.subscriptionToKmPricesChart$ !== undefined && this.subscriptionToKmPricesChart$.unsubscribe();

    this.subscriptionToKmPricesChart$ = this.getDataService.getKmPricesData$(params).subscribe(
      data => {
        dataKmPricesChart = data;

        this.dataForKmPricesChart = [
          dataKmPricesChart.dates,
          dataKmPricesChart.linearMeterKmPrices,
          dataKmPricesChart.weightKmPrices
        ];

        if (dataKmPricesChart.averageLinearMeterKmPrice === null) {
          this.titleForKmPricesChart = `${this.translatedText.kmPricesChart.title} ${this.translatedText.unset}`;
        } 
        this.titleForKmPricesChart = [`${this.translatedText.kmPricesChart.title} ${dataKmPricesChart.averageLinearMeterKmPrices} ${this.translatedText.units.euros}`, 
        `${this.translatedText.kmPricesChart.title2} ${dataKmPricesChart.averageWeightKmPrices} ${this.translatedText.units.euros}`];
        this.isKmPricesChartLoading = false;
      },

      error => {
      console.log(error);
    });

  }

  getDataOrdersCountPieChart(params) {
    
    let dataForOrdersCount;
    this.dataForOrdersCountPieChart = undefined;
    this.isOrdersCountPieChartLoading = true;

    this.subscriptionToOrdersCountPieChart$ !== undefined && this.subscriptionToOrdersCountPieChart$.unsubscribe();

    this.subscriptionToOrdersCountPieChart$ = this.getDataService.getOrdersCountData$(params).subscribe(
      data => {
      
      dataForOrdersCount = data;
      
      this.dataForOrdersCountPieChart = [
        dataForOrdersCount.seizedOrdersShortDistancesCount,
        dataForOrdersCount.seizedOrdersMiddleDistancesCount,
        dataForOrdersCount.seizedOrdersLongDistancesCount,
      ];
      this.titleForOrdersCountPieChart = `${this.translatedText.ordersCountPieChart.title} ${dataForOrdersCount.seizedOrdersTotalCount}`;
      this.isOrdersCountPieChartLoading = false;
      },

      error => {
        console.log(error);
      });
  }

  getDataFillingRatesChart(params) {

    let dataFillingRatesChart;
    this.dataForFillingRatesChart = undefined;
    this.isFillingRatesChartLoading = true;
    this.subscriptionToFillingRatesChart$ !== undefined && this.subscriptionToFillingRatesChart$.unsubscribe();

    this.subscriptionToFillingRatesChart$ = this.getDataService.getFillingRatesData$(params).subscribe(
      data => {
      dataFillingRatesChart = data;
      this.dataForFillingRatesChart = [
        dataFillingRatesChart.dates,
        dataFillingRatesChart.linearFillingRates,
        dataFillingRatesChart.weightFillingRates
      ];

      if (dataFillingRatesChart.averageLinearFillingRates === null) {
        this.titleForFillingRatesChart = `${this.translatedText.fillingRatesChart.title} ${this.translatedText.unset}`;
      } 
      this.titleForFillingRatesChart = [`${this.translatedText.fillingRatesChart.title} ${dataFillingRatesChart.averageLinearFillingRates} ${this.translatedText.units.percents}`,
      `${this.translatedText.fillingRatesChart.title2} ${dataFillingRatesChart.averageWeightFillingRates} ${this.translatedText.units.percents}`];
      this.isFillingRatesChartLoading = false;
      },

      error => {
        console.log(error);
      });
  }


  setTranslatedLabelsAndTitles() {

    this.translatedText = this.languageService.text; 
    this.titleOnHover = this.translatedText.titleOnHover;

    this.labelsForTurnoverBarChart = this.translatedText.turnoverBarChart.labels;
    this.optionsForTurnoverBarChart.scales.yAxes[0].id = this.translatedText.turnoverBarChart.labels.labelYaxeLine;
    this.optionsForTurnoverBarChart.scales.yAxes[0].scaleLabel.labelString = this.translatedText.turnoverBarChart.labels.labelYaxeLine;
    this.dataTypesForTurnoverBarChart = ['line'];

    this.labelsForKmPricesChart = this.translatedText.kmPricesChart.labels;
    this.optionsForKmPricesChart.scales.yAxes[0].id = this.translatedText.kmPricesChart.labels.labelYaxeLine;
    this.optionsForKmPricesChart.scales.yAxes[0].scaleLabel.labelString = this.translatedText.kmPricesChart.labels.labelYaxeLine;
    this.dataTypesForKmPricesChart = ['line', 'line'];

    this.labelsForOrdersCountPieChart = [this.translatedText.ordersCountPieChart.labels.label1, this.translatedText.ordersCountPieChart.labels.label2, this.translatedText.ordersCountPieChart.labels.label3];

    this.labelsForFillingRatesChart = this.translatedText.fillingRatesChart.labels;
    this.optionsForFillingRatesChart.scales.yAxes[0].id = this.translatedText.fillingRatesChart.labels.labelYaxe2; 
    this.optionsForFillingRatesChart.scales.yAxes[0].scaleLabel.labelString = this.translatedText.fillingRatesChart.labels.labelYaxe2;
    this.dataTypesForFillingRatesChart = ['line','line'];

  }

  getDataWithFiltersService() {

    this.setTranslatedLabelsAndTitles();
    this.authenticationService.logVerify();
    this.filtersStateService.getState$().subscribe(store => {
      
      this.dataFromStore = store;
      this.showOrdersList = false;
      if (localStorage.getItem('user')) {
        this.filtersListService.getFilters().subscribe(
          data => {
            this.filtersListService.setFiltersListWithFiltersFromApi(data);
            this.isLoading=false;
          },
          error => {
            this.authenticationService.logOut();
            console.log(error);
          });
          this.getDataTurnoverBarChart(store.filters);
          this.getDataOrdersCountPieChart(store.filters);
          this.getDataKmPricesChart(store.filters);
          this.getDataFillingRatesChart(store.filters);
      } 
    });

  }

  ngOnInit() {

    this.getDataWithFiltersService();

  };
  ngOnDestroy() {
    this.subscriptionToOrdersList$ !== undefined && this.subscriptionToOrdersList$.unsubscribe();
    this.subscriptionToFillingRatesChart$ !== undefined && this.subscriptionToFillingRatesChart$.unsubscribe();
    this.subscriptionToOrdersCountPieChart$ !== undefined && this.subscriptionToOrdersCountPieChart$.unsubscribe();
    this.subscriptionToKmPricesChart$ !== undefined && this.subscriptionToKmPricesChart$.unsubscribe();
    this.subscriptionToTurnoverBarChart$ !== undefined && this.subscriptionToTurnoverBarChart$.unsubscribe();
  }

}