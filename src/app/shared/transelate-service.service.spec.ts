import { TestBed } from '@angular/core/testing';

import { TranselateServiceService } from './transelate-service.service';

describe('TranselateServiceService', () => {
  let service: TranselateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranselateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
