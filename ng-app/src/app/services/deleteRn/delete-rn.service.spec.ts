import { TestBed, inject } from '@angular/core/testing';

import { DeleteRnService } from './delete-rn.service';

describe('DeleteRnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteRnService]
    });
  });

  it('should ...', inject([DeleteRnService], (service: DeleteRnService) => {
    expect(service).toBeTruthy();
  }));
});
