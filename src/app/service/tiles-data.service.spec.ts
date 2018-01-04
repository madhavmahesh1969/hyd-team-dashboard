import { TestBed, inject } from '@angular/core/testing';

import { TilesDataService } from './tiles-data.service';

describe('TilesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TilesDataService]
    });
  });

  it('should be created', inject([TilesDataService], (service: TilesDataService) => {
    expect(service).toBeTruthy();
  }));
});
