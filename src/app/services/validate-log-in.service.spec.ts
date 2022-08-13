import { TestBed } from '@angular/core/testing';

import { ValidateLogInService } from './validate-log-in.service';

describe('ValidateLogInService', () => {
  let service: ValidateLogInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateLogInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
