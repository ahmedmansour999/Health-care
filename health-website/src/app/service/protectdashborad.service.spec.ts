import { TestBed } from '@angular/core/testing';

import { ProtectdashboradService } from './protectdashborad.service';

describe('ProtectdashboradService', () => {
  let service: ProtectdashboradService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtectdashboradService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
