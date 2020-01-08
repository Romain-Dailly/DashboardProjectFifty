import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { DataFakerService } from './faker/data-faker.service';
import { Filters } from '../../interfaces/filters.interface';
import { GetDataService } from './get-data.service';


describe('GetDataService', () => {
  let service: GetDataService;
  let fakerService: DataFakerService;
  let http: HttpClient;

  beforeEach(() => { 
    fakerService= new DataFakerService();
    service = new GetDataService(http, fakerService); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data for year for data pie benefit corresponding environment',(done: DoneFn) => {
    let params:Filters = {timeScale:{
      format:'year',
      year:'2018',
      month:'0'
    }};
    service.isDataFromAPI = false;
    spyOn(fakerService,'generateFakeDataForPieChartForOneYearOrMonth$').and.returnValue(of([12,14,2]));
    service.getDataForPieChart$(params).subscribe(value => {
      expect(fakerService.generateFakeDataForPieChartForOneYearOrMonth$).toHaveBeenCalled();
      expect(value).toEqual([12,14,2]);
    });
    service.isDataFromAPI = true;
    // service.getDataForPieChart$(params).subscribe(value => {
    //   expect(value).toBeNull();
    // });
    service.isDataFromAPI = null;
    service.getDataForPieChart$(params).subscribe(value => {
      expect(fakerService.generateFakeDataForPieChartForOneYearOrMonth$).toHaveBeenCalled();
    });
    done();
  })

  it('should return data for year for data doughnut filling corresponding environment',(done: DoneFn) => {
    let params:Filters = {timeScale:{
      format:'year',
      year:'2018',
      month:'0'
    }};
    service.isDataFromAPI = false;
    spyOn(fakerService,'generateFakeDataForDoughnutYearOrMonth$').and.returnValue(of([12,14,2]));
    service.getDataForDoughnutChart$(params).subscribe(value => {
      expect(fakerService.generateFakeDataForDoughnutYearOrMonth$).toHaveBeenCalled();
      expect(value).toEqual([12,14,2]);
    });
    service.isDataFromAPI = true;
    // service.getDataForDoughnutChart$(params).subscribe(value => {
    //   expect(value).toBeNull();
    // });
    service.isDataFromAPI = null;
    service.getDataForDoughnutChart$(params).subscribe(value => {
      expect(fakerService.generateFakeDataForDoughnutYearOrMonth$).toHaveBeenCalled();
    });
    done();
  })

  it('should return data for year for data km prices chart corresponding environment',(done: DoneFn) => {
    let params:Filters = {timeScale:{
      format:'year',
      year:'2018',
      month:'0'
    }};
    service.isDataFromAPI = false;
    spyOn(fakerService,'generateFakeDataForKmPriceChartYearOrMonth$').and.returnValue(of({
      dates:[],
      kmBenefits:[],
      kmStepPrices:[],
      effectiveKmPrices:[],
      averageForTitleForBarChartKmPrice:0
    }));
    service.getDataForKmPriceChart$(params).subscribe(value => {
      expect(fakerService.generateFakeDataForKmPriceChartYearOrMonth$).toHaveBeenCalled();
      expect(value).toEqual({
        dates:[],
        kmBenefits:[],
        kmStepPrices:[],
        effectiveKmPrices:[],
        averageForTitleForBarChartKmPrice:0
      });
    });
    service.isDataFromAPI = true;
    // service.getDataForKmPriceChart$(params).subscribe(value => {
    //   expect(value).toBeNull();
    // });
    service.isDataFromAPI = null;
    service.getDataForKmPriceChart$(params).subscribe(value => {
      expect(fakerService.generateFakeDataForKmPriceChartYearOrMonth$).toHaveBeenCalled();
    });
    done();
  })
  it('should return data for year for data empty chart corresponding environment',(done: DoneFn) => {
    let params:Filters = {timeScale:{
      format:'year',
      year:'2018',
      month:'0'
    }};
    service.isDataFromAPI = false;
    spyOn(fakerService,'generateFakeDataForEmptyChartYearOrMonth$').and.returnValue(of({
      dates:[],
      totalDistances:[],
      emptyDistances:[],
      ratioDistances:[],
      averageRatioDistancesForBarChartEmpty:0
    }));
    service.getDataForEmptyChart$(params).subscribe(value => {
      expect(fakerService.generateFakeDataForEmptyChartYearOrMonth$).toHaveBeenCalled();
      expect(value).toEqual({
        dates:[],
        totalDistances:[],
        emptyDistances:[],
        ratioDistances:[],
        averageRatioDistancesForBarChartEmpty:0
      });
    });
    service.isDataFromAPI = true;
    // service.getDataForEmptyChart$(params).subscribe(value => {
    //   expect(value).toBeNull();
    // });
    service.isDataFromAPI = null;
    service.getDataForEmptyChart$(params).subscribe(value => {
      expect(fakerService.generateFakeDataForEmptyChartYearOrMonth$).toHaveBeenCalled();
    });
    done();
  })


});
