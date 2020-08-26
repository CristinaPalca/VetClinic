import { TestBed } from '@angular/core/testing';

import { SetPopupService } from './set-popup.service';

describe('SetPopupService', () => {
  let service: SetPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
