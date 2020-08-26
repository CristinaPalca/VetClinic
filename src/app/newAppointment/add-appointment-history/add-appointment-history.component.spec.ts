import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentHistoryComponent } from './add-appointment-history.component';

describe('AddAppointmentHistoryComponent', () => {
  let component: AddAppointmentHistoryComponent;
  let fixture: ComponentFixture<AddAppointmentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppointmentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppointmentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
