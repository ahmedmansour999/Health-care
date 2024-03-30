import { TestBed } from '@angular/core/testing';

import { RouteAppLoginAndRegisterService } from './route-app-login-and-register.service';

describe('RouteAppLoginAndRegisterService', () => {
  let service: RouteAppLoginAndRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteAppLoginAndRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
