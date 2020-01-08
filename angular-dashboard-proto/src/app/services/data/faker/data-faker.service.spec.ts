import { DataForBarChartEmpty, DataForBarChartKmPrices } from '../classes/classes';
import { TestBed } from '@angular/core/testing';
import { DataFakerService } from './data-faker.service';

describe('DataFakerService', () => {
  let service : DataFakerService;
  beforeEach(() => service = TestBed.get(DataFakerService));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return pie benefit data for year',
    (done: DoneFn) => {
      service.generateFakeDataForPieChartForOneYearOrMonth$('year', 0).subscribe(value => {
        expect(value.constructor).toBe(Array);
        expect(value.length).toEqual(3);
        expect(value[2]).toEqual(Number((value[1]-value[0]).toFixed(2)));
        done();
      });
  });
  it('should return pie benefit data for month',
    (done: DoneFn) => {
      service.generateFakeDataForPieChartForOneYearOrMonth$('month', 1).subscribe(value => {
        expect(value.constructor).toBe(Array);
        expect(value.length).toBe(3);
        expect(value[2]).toEqual(Number((value[1]-value[0]).toFixed(2)));
        done();
      });
  });
  it('should return doughnut filling data for year',
    (done: DoneFn) => {
      service.generateFakeDataForDoughnutYearOrMonth$('year', 0).subscribe(value => {
        expect(value.constructor).toBe(Array);
        expect(value.length).toBe([1,2,3].length);
        expect(value[2]).toEqual((value[0]*100/value[1]).toFixed(2));
        done();
      });
  });
  it('should return doughnut filling data for month',
    (done: DoneFn) => {
      service.generateFakeDataForDoughnutYearOrMonth$('month', 1).subscribe(value => {
        expect(value.constructor).toBe(Array);
        expect(value.length).toEqual([1,2,3].length);
        expect(value[2]).toEqual((value[0]*100/value[1]).toFixed(2));
        done();
      });
  });
  it('should return bar kmprice data for year',
    (done: DoneFn) => {
      service.generateFakeDataForKmPriceChartYearOrMonth$('year', 0).subscribe(value => {
        expect(value.hasOwnProperty('dates')).toBeTruthy();
        expect(value.hasOwnProperty('kmBenefits')).toBeTruthy();
        expect(value.hasOwnProperty('kmStepPrices')).toBeTruthy();
        expect(value.hasOwnProperty('effectiveKmPrices')).toBeTruthy();
        expect(value.hasOwnProperty('averageForTitleForBarChartKmPrice')).toBeTruthy();
        expect(value.dates.length).toEqual(12);
        done();
      });
  });
  it('should return bar kmprice data for month',
    (done: DoneFn) => {
      service.generateFakeDataForKmPriceChartYearOrMonth$('month', 1).subscribe(value => {
        expect(value.hasOwnProperty('dates')).toBeTruthy();
        expect(value.hasOwnProperty('kmBenefits')).toBeTruthy();
        expect(value.hasOwnProperty('kmStepPrices')).toBeTruthy();
        expect(value.hasOwnProperty('effectiveKmPrices')).toBeTruthy();
        expect(value.hasOwnProperty('averageForTitleForBarChartKmPrice')).toBeTruthy();
        expect(value.dates.length).toEqual(31);
        done();
      });
  });
  it('should return bar empty data for year',
    (done: DoneFn) => {
      service.generateFakeDataForEmptyChartYearOrMonth$('year', 0).subscribe(value => {
        expect(value.hasOwnProperty('dates')).toBeTruthy();
        expect(value.hasOwnProperty('totalDistances')).toBeTruthy();
        expect(value.hasOwnProperty('emptyDistances')).toBeTruthy();
        expect(value.hasOwnProperty('ratioDistances')).toBeTruthy();
        expect(value.hasOwnProperty('averageRatioDistancesForBarChartEmpty')).toBeTruthy();
        expect(value.dates.length).toEqual(12);
        done();
      });
  });
  it('should return bar empty data for month',
    (done: DoneFn) => {
      service.generateFakeDataForEmptyChartYearOrMonth$('month', 1).subscribe(value => {
        expect(value.hasOwnProperty('dates')).toBeTruthy();
        expect(value.hasOwnProperty('totalDistances')).toBeTruthy();
        expect(value.hasOwnProperty('emptyDistances')).toBeTruthy();
        expect(value.hasOwnProperty('ratioDistances')).toBeTruthy();
        expect(value.hasOwnProperty('averageRatioDistancesForBarChartEmpty')).toBeTruthy();
        expect(value.dates.length).toEqual(31);
        done();
      });
  });

});
