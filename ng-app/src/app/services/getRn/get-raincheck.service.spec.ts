import { TestBed, inject } from '@angular/core/testing';

import { GetRaincheckService } from './get-raincheck.service';

describe('GetRaincheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRaincheckService]
    });
  });

  it('should ...', inject([GetRaincheckService], (service: GetRaincheckService) => {
    expect(service).toBeTruthy();
  }));
});
