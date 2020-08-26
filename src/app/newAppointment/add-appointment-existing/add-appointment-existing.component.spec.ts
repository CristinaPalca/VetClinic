import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentExistingComponent } from './add-appointment-existing.component';

describe('AddAppointmentExistingComponent', () => {
  let component: AddAppointmentExistingComponent;
  let fixture: ComponentFixture<AddAppointmentExistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppointmentExistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppointmentExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
