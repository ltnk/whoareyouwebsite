import { TestBed } from '@angular/core/testing';

import { DeathNoteQuizService } from './death-note-quiz.service';

describe('DeathNoteQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeathNoteQuizService = TestBed.get(DeathNoteQuizService);
    expect(service).toBeTruthy();
  });
});
