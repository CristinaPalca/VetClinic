import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentHoursComponent } from './add-appointment-hours.component';

describe('AddAppointmentHoursComponent', () => {
  let component: AddAppointmentHoursComponent;
  let fixture: ComponentFixture<AddAppointmentHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppointmentHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppointmentHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
