import { TestBed } from '@angular/core/testing';

import { SetPatientService } from './set-patient.service';

describe('SetPatientService', () => {
  let service: SetPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
