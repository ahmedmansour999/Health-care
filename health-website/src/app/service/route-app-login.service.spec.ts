import { TestBed } from '@angular/core/testing';

import { RouteAppLoginService } from './route-app-login.service';

describe('RouteAppLoginService', () => {
  let service: RouteAppLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteAppLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
