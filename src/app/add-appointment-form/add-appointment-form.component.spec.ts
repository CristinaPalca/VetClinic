import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentFormComponent } from './add-appointment-form.component';

describe('AddAppointmentFormComponent', () => {
  let component: AddAppointmentFormComponent;
  let fixture: ComponentFixture<AddAppointmentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppointmentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});