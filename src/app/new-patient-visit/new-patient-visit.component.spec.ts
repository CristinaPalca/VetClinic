import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatientVisitComponent } from './new-patient-visit.component';

describe('NewPatientVisitComponent', () => {
  let component: NewPatientVisitComponent;
  let fixture: ComponentFixture<NewPatientVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPatientVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPatientVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
