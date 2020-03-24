import { TestBed } from '@angular/core/testing';

import { QuizCategoryService } from './quiz-category.service';

describe('QuizCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizCategoryService = TestBed.get(QuizCategoryService);
    expect(service).toBeTruthy();
  });
});
