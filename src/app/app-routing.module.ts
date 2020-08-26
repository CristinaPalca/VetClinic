import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppointmentsComponent} from './appointmentsPage/appointments/appointments.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PatientsComponent} from './patientsPage/patients/patients.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {AddAppointmentComponent} from './newAppointment/add-appointment/add-appointment.component';
import {AddAppointmentExistingComponent} from "./newAppointment/add-appointment-existing/add-appointment-existing.component";


const routes: Routes = [
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'add-appointment', component: AddAppointmentComponent},
  {path: 'add-appointment-existing', component: AddAppointmentExistingComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
