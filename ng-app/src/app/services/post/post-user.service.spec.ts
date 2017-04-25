import { TestBed, inject } from '@angular/core/testing';

import { PostUserService } from './post-user.service';

describe('PostUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostUserService]
    });
  });

  it('should ...', inject([PostUserService], (service: PostUserService) => {
    expect(service).toBeTruthy();
  }));
});
