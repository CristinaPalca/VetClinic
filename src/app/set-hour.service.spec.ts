import { TestBed } from '@angular/core/testing';

import { SetHourService } from './set-hour.service';

describe('SetHourService', () => {
  let service: SetHourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetHourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
