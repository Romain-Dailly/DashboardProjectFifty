import { TestBed } from '@angular/core/testing';

import { FiltersListService } from './filters-list.service';

describe('FiltersListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiltersListService = TestBed.get(FiltersListService);
    expect(service).toBeTruthy();
  });
});
