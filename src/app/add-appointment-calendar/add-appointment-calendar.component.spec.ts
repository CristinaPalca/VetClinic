import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentCalendarComponent } from './add-appointment-calendar.component';

describe('AddAppointmentCalendarComponent', () => {
  let component: AddAppointmentCalendarComponent;
  let fixture: ComponentFixture<AddAppointmentCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppointmentCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppointmentCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
