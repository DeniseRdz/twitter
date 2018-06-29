import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationsService } from './authentications.service';

describe('AuthenticationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationsService]
    });
  });

  it('should be created', inject([AuthenticationsService], (service: AuthenticationsService) => {
    expect(service).toBeTruthy();
  }));
});
