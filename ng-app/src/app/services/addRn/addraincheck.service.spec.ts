import { TestBed, inject } from '@angular/core/testing';

import { AddraincheckService } from './addraincheck.service';

describe('AddraincheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddraincheckService]
    });
  });

  it('should ...', inject([AddraincheckService], (service: AddraincheckService) => {
    expect(service).toBeTruthy();
  }));
});
