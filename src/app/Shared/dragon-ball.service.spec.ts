import { TestBed } from '@angular/core/testing';

import { DragonBallService } from './dragon-ball.service';

describe('DragonBallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragonBallService = TestBed.get(DragonBallService);
    expect(service).toBeTruthy();
  });
});
