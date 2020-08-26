import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentFormExistingComponent } from './add-appointment-form-existing.component';

describe('AddAppointmentFormExistingComponent', () => {
  let component: AddAppointmentFormExistingComponent;
  let fixture: ComponentFixture<AddAppointmentFormExistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppointmentFormExistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppointmentFormExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
