import { TestBed } from '@angular/core/testing';

import { DetectAuthService } from './detect-auth.service';

describe('DetectAuthService', () => {
  let service: DetectAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetectAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
