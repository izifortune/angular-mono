import { TestBed } from '@angular/core/testing';

import { SecondService } from './second.service';

describe('SecondService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecondService = TestBed.get(SecondService);
    expect(service).toBeTruthy();
  });
});
