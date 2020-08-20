import { TestBed } from '@angular/core/testing';

import { SetDayService } from './set-day.service';

describe('SetDayService', () => {
  let service: SetDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
