import { TestBed, inject } from '@angular/core/testing';

import { TwetsService } from './twets.service';

describe('TwetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwetsService]
    });
  });

  it('should be created', inject([TwetsService], (service: TwetsService) => {
    expect(service).toBeTruthy();
  }));
});
