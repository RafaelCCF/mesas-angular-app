import { TestBed, inject } from '@angular/core/testing';

import { RestTestService } from './rest-test.service';

describe('RestTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestTestService]
    });
  });

  it('should be created', inject([RestTestService], (service: RestTestService) => {
    expect(service).toBeTruthy();
  }));
});
