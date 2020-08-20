import { TestBed } from '@angular/core/testing';

import { SetDoctorService } from './set-doctor.service';

describe('SetDoctorService', () => {
  let service: SetDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
