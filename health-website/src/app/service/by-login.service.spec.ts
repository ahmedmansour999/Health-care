import { TestBed } from '@angular/core/testing';

import { ByLoginService } from './by-login.service';

describe('ByLoginService', () => {
  let service: ByLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ByLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
