import { TestBed } from '@angular/core/testing';

import { CreateDateService } from './create-date.service';

describe('CreateDateService', () => {
  let service: CreateDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
