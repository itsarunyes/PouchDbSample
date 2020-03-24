import { TestBed } from '@angular/core/testing';

import { QuizTypeService } from './quiz-type.service';

describe('QuizTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizTypeService = TestBed.get(QuizTypeService);
    expect(service).toBeTruthy();
  });
});
