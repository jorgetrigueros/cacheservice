import { TestBed, inject } from '@angular/core/testing';

import { NuarCacheService } from './nuar-cache.service';

describe('NuarCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NuarCacheService]
    });
  });

  it('should be created', inject([NuarCacheService], (service: NuarCacheService) => {
    expect(service).toBeTruthy();
  }));
});
