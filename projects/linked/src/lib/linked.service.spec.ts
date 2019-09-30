import { TestBed } from '@angular/core/testing';

import { LinkedService } from './linked.service';

describe('LinkedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkedService = TestBed.get(LinkedService);
    expect(service).toBeTruthy();
  });
});
