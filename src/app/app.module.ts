import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DateComponent } from './date/date.component';
import { AppointmentComponent } from './appointment/appointment.component';
import {FormsModule} from '@angular/forms';
import { NewPatientVisitComponent } from './new-patient-visit/new-patient-visit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { PatientComponent } from './patient/patient.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AddAppointmentFormComponent } from './add-appointment-form/add-appointment-form.component';
import { AddAppointmentCalendarComponent } from './add-appointment-calendar/add-appointment-calendar.component';
import { AddAppointmentHoursComponent } from './add-appointment-hours/add-appointment-hours.component';
import { AddAppointmentHistoryComponent } from './add-appointment-history/add-appointment-history.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AppointmentsComponent,
    StatisticsComponent,
    DateComponent,
    AppointmentComponent,
    NewPatientVisitComponent,
    DashboardComponent,
    PatientsComponent,
    EditAppointmentComponent,
    PatientComponent,
    AddAppointmentComponent,
    AddAppointmentFormComponent,
    AddAppointmentCalendarComponent,
    AddAppointmentHoursComponent,
    AddAppointmentHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
