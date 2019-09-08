import { TestBed } from '@angular/core/testing';

import { FirstService } from './first.service';

describe('FirstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstService = TestBed.get(FirstService);
    expect(service).toBeTruthy();
  });
});
