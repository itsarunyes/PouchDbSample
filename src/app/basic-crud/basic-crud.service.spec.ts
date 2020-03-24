import { TestBed } from '@angular/core/testing';

import { BasicCrudService } from './basic-crud.service';

describe('BasicCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicCrudService = TestBed.get(BasicCrudService);
    expect(service).toBeTruthy();
  });
});
