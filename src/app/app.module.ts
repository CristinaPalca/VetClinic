import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppointmentsComponent } from './appointmentsPage/appointments/appointments.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DateComponent } from './date/date.component';
import { AppointmentComponent } from './appointmentsPage/appointment/appointment.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patientsPage/patients/patients.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { PatientComponent } from './patientsPage/patient/patient.component';
import { AddAppointmentComponent } from './newAppointment/add-appointment/add-appointment.component';
import { AddAppointmentFormComponent } from './newAppointment/add-appointment-form/add-appointment-form.component';
import { AddAppointmentCalendarComponent } from './newAppointment/add-appointment-calendar/add-appointment-calendar.component';
import { AddAppointmentHoursComponent } from './newAppointment/add-appointment-hours/add-appointment-hours.component';
import { AddAppointmentHistoryComponent } from './newAppointment/add-appointment-history/add-appointment-history.component';
import { CreatedPopupComponent } from './appointmentsPage/created-popup/created-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddAppointmentExistingComponent } from './newAppointment/add-appointment-existing/add-appointment-existing.component';
import { AddAppointmentFormExistingComponent }
from './newAppointment/add-appointment-form-existing/add-appointment-form-existing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AppointmentsComponent,
    StatisticsComponent,
    DateComponent,
    AppointmentComponent,
    DashboardComponent,
    PatientsComponent,
    EditAppointmentComponent,
    PatientComponent,
    AddAppointmentComponent,
    AddAppointmentFormComponent,
    AddAppointmentCalendarComponent,
    AddAppointmentHoursComponent,
    AddAppointmentHistoryComponent,
    CreatedPopupComponent,
    AddAppointmentExistingComponent,
    AddAppointmentFormExistingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
