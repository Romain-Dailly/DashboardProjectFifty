import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { DataForFillingRateChart } from '../../../interfaces/dataForFillingRateChart.interface';
import { DataForKmPricesChart } from './../../../interfaces/dataForKmPricesChart.interface';
import { DataForTurnoverBarChart } from './../../../interfaces/dataForTurnoverBarChart.interface';
import { DataForOrdersCountPieChart } from './../../../interfaces/dataForOrdersCountPieChart.interface';

@Injectable({
  providedIn: 'root'
})
export class DataFakerService {

  constructor() { }

  //Fake data for Doughnut Filling Chart
  generateFakeDataForOrdersCountPieChartYearOrMonth$(timeFormat:string, month:number):Observable<DataForOrdersCountPieChart> {

    let dataForOrdersCountPieChart= {
      seizedOrdersLongDistancesCount:0,
      seizedOrdersMiddleDistancesCount:0,
      seizedOrdersShortDistancesCount:0,
      seizedOrdersTotalCount:0,
    };

    dataForOrdersCountPieChart.seizedOrdersShortDistancesCount= Number((Math.random()*(200 - 2) + 2).toFixed(0));
    dataForOrdersCountPieChart.seizedOrdersMiddleDistancesCount= Number((Math.random()*(200 - 2) + 2).toFixed(0));
      dataForOrdersCountPieChart.seizedOrdersLongDistancesCount= Number((Math.random()*(200 - 2) + 2).toFixed(0));
      dataForOrdersCountPieChart.seizedOrdersTotalCount = dataForOrdersCountPieChart.seizedOrdersLongDistancesCount + 
                                                          dataForOrdersCountPieChart.seizedOrdersMiddleDistancesCount + 
                                                          dataForOrdersCountPieChart.seizedOrdersShortDistancesCount;

    return of({
      seizedOrdersShortDistancesCount : dataForOrdersCountPieChart.seizedOrdersShortDistancesCount,
      seizedOrdersMiddleDistancesCount : dataForOrdersCountPieChart.seizedOrdersMiddleDistancesCount,
      seizedOrdersLongDistancesCount : dataForOrdersCountPieChart.seizedOrdersLongDistancesCount,
      seizedOrdersTotalCount : dataForOrdersCountPieChart.seizedOrdersTotalCount,
    });
  } 

  // Fake data for turnoverBarChart
  generateFakeDataForTurnoverBarChartYearOrMonth$(timeFormat:string, month:number):Observable<DataForTurnoverBarChart> {

    let dataForTurnoverBarChart = {
      dates:[],
      seizedOrdersSellPrices:[],
      temporaryOrdersCount:[],
      totalSeizedOrdersSellPrice:0
    };

    for (let i =0;i<12;i++) {
      dataForTurnoverBarChart.dates[i]=[];
      dataForTurnoverBarChart.seizedOrdersSellPrices[i]=[];
      dataForTurnoverBarChart.temporaryOrdersCount[i]=[];

      for (let j =0;j<31;j++) {
        dataForTurnoverBarChart.temporaryOrdersCount[i].push(Number((Math.random()*(50 - 20) + 50).toFixed(2)));
        dataForTurnoverBarChart.seizedOrdersSellPrices[i].push(Number((dataForTurnoverBarChart.temporaryOrdersCount[i][j] * (Math.random()*(800 - 50) + 50)).toFixed(2)));
        dataForTurnoverBarChart.dates[i].push(j);
      }
    }

    if (timeFormat === 'year') {
      dataForTurnoverBarChart.dates = dataForTurnoverBarChart.dates.map((data, index)=> {

          if (index<=8) {
            let newDate = '0'+(index+1).toString();
            return newDate;
          } 
            let newDate = (index+1).toString();
            return newDate
      });

      dataForTurnoverBarChart.seizedOrdersSellPrices = dataForTurnoverBarChart.seizedOrdersSellPrices.map((data, index)=> {
        return Number((data.reduce((accu, value)=>(accu+value))).toFixed(2))
      });

      dataForTurnoverBarChart.totalSeizedOrdersSellPrice =  dataForTurnoverBarChart.seizedOrdersSellPrices.reduce((accu, value)=> {
        return Number((accu + value).toFixed(2))
      })
      
      return of(dataForTurnoverBarChart);
    }

    let monthDates = dataForTurnoverBarChart.dates[month].map((data, index) => {
        if (index <= 8) {
          let newDate = '0'+(index + 1).toString();
          return newDate;
        } 
          let newDate = (index + 1).toString();
          return newDate
      });

    return of({
      dates: monthDates,
      seizedOrdersSellPrices: dataForTurnoverBarChart.seizedOrdersSellPrices[month],
      totalSeizedOrdersSellPrice : dataForTurnoverBarChart.seizedOrdersSellPrices[month].reduce((accu, value)=> {
        return Number((accu + value).toFixed(2));
      })
    });
  }

  // Fake data for km prices chart
  generateFakeDataForKmPricesChartYearOrMonth$(timeFormat:string, month:number):Observable<DataForKmPricesChart> {

    let dataForKmPricesChart = {
      dates:[],
      linearMeterKmPrices:[],
      weightKmPrices:[],
      averageWeightKmPrices:0,
      averageLinearMeterKmPrices:0
    };

    for (let i =0;i<12;i++) {
      dataForKmPricesChart.dates[i]=[];
      dataForKmPricesChart.weightKmPrices[i]=[];
      dataForKmPricesChart.linearMeterKmPrices[i]=[];

      for (let j =0;j<31;j++) {
        dataForKmPricesChart.weightKmPrices[i].push(Number((Math.random()*(1.2 - 0.6) + 0.6).toFixed(2)));
        dataForKmPricesChart.linearMeterKmPrices[i].push(Number((Math.random()*(1.2 - 0.6) + 0.6).toFixed(2)));
        dataForKmPricesChart.dates[i].push(j);
      }
    }

    if (timeFormat === 'year') {
      dataForKmPricesChart.dates = dataForKmPricesChart.dates.map((data, index)=> {

          if (index<=8) {
            let newDate = '0'+(index+1).toString();
            return newDate;
          } 
            let newDate = (index+1).toString();
            return newDate
      });

      dataForKmPricesChart.linearMeterKmPrices = dataForKmPricesChart.linearMeterKmPrices.map((data, index)=> {
        return Number((data.reduce((accu, value)=>(accu+value))/data.length).toFixed(2))
      });

      dataForKmPricesChart.weightKmPrices = dataForKmPricesChart.weightKmPrices.map((data, index)=> {
        return Number((data.reduce((accu, value)=>(accu+value))/data.length).toFixed(2))
      });

      dataForKmPricesChart.averageWeightKmPrices = Number(((dataForKmPricesChart.weightKmPrices.reduce((accu, value)=>accu + value))/dataForKmPricesChart.weightKmPrices.length).toFixed(2));
      dataForKmPricesChart.averageLinearMeterKmPrices = Number(((dataForKmPricesChart.linearMeterKmPrices.reduce((accu, value)=>accu + value))/dataForKmPricesChart.linearMeterKmPrices.length).toFixed(2));
      
      return of(dataForKmPricesChart);
    }

    let monthDates = dataForKmPricesChart.dates[month].map((data, index) => {
        if (index<=8) {
          let newDate = '0'+(index+1).toString();
          return newDate;
        } 
          let newDate = (index+1).toString();
          return newDate
      });

    return of({
      dates: monthDates,
      linearMeterKmPrices: dataForKmPricesChart.linearMeterKmPrices[month],
      weightKmPrices: dataForKmPricesChart.weightKmPrices[month],
      averageWeightKmPrices: Number(((dataForKmPricesChart.weightKmPrices[month].reduce((accu, value)=>accu + value))
      /dataForKmPricesChart.weightKmPrices[month].length).toFixed(2)),
      averageLinearMeterKmPrices: Number(((dataForKmPricesChart.linearMeterKmPrices[month].reduce((accu, value)=>accu + value))
      /dataForKmPricesChart.linearMeterKmPrices[month].length).toFixed(2)),
    });
  }

    // Fake data for filling rate chart
    generateFakeDataForFillingRatesChartYearOrMonth$(timeFormat:string, month:number):Observable<DataForFillingRateChart> {
      let dataForFillingRateChart = {
        dates:[],
        linearFillingRates:[],
        weightFillingRates:[],
        averageLinearFillingRates:0,
        averageWeightFillingRates:0
      };
  
      for (let i =0;i<12;i++) {
        dataForFillingRateChart.dates[i]=[];
        dataForFillingRateChart.linearFillingRates[i]=[];
        dataForFillingRateChart.weightFillingRates[i]=[];
  
        for (let j =0;j<31;j++) {
          dataForFillingRateChart.linearFillingRates[i].push(Number((Math.random()*(0 - 100) + 100).toFixed(2)));
          dataForFillingRateChart.weightFillingRates[i].push(Number((Math.random()*(0 - 100) + 100).toFixed(2)));
          dataForFillingRateChart.dates[i].push(j);
        }
      }
  
      if (timeFormat === 'year') {
        dataForFillingRateChart.dates = dataForFillingRateChart.dates.map((data, index)=> {
  
            if (index<=8) {
              let newDate = '0'+(index+1).toString();
              return newDate;
            } 
              let newDate = (index+1).toString();
              return newDate
        });
  
        dataForFillingRateChart.linearFillingRates = dataForFillingRateChart.linearFillingRates.map((data, index)=> {
          return Number((data.reduce((accu, value)=>(accu+value))/data.length).toFixed(2))
        });
  
        dataForFillingRateChart.weightFillingRates = dataForFillingRateChart.weightFillingRates.map((data, index)=> {
          return Number((data.reduce((accu, value)=>(accu+value))/data.length).toFixed(2))
        });
  
        dataForFillingRateChart.averageLinearFillingRates = Number(((dataForFillingRateChart.linearFillingRates.reduce((accu, value)=>accu + value))/dataForFillingRateChart.linearFillingRates.length).toFixed(2));
        dataForFillingRateChart.averageWeightFillingRates = Number(((dataForFillingRateChart.weightFillingRates.reduce((accu, value)=>accu + value))/dataForFillingRateChart.weightFillingRates.length).toFixed(2));
        
        return of(dataForFillingRateChart);
      }
  
      let monthDates = dataForFillingRateChart.dates[month].map((data, index) => {
          if (index<=8) {
            let newDate = '0'+(index+1).toString();
            return newDate;
          } 
            let newDate = (index+1).toString();
            return newDate
        });
  
      return of({
        dates: monthDates,
        linearFillingRates: dataForFillingRateChart.linearFillingRates[month],
        weightFillingRates: dataForFillingRateChart.weightFillingRates[month],
        averageLinearFillingRates: Number(((dataForFillingRateChart.linearFillingRates[month].reduce((accu, value)=>accu + value))
        /dataForFillingRateChart.linearFillingRates[month].length).toFixed(2)),
        averageWeightFillingRates: Number(((dataForFillingRateChart.weightFillingRates[month].reduce((accu, value)=>accu + value))
        /dataForFillingRateChart.weightFillingRates[month].length).toFixed(2))
      });
    }

}