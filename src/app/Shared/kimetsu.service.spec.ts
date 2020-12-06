import { TestBed } from '@angular/core/testing';

import { KimetsuService } from './kimetsu.service';

describe('KimetsuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KimetsuService = TestBed.get(KimetsuService);
    expect(service).toBeTruthy();
  });
});
