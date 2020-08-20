import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppointmentsComponent} from './appointments/appointments.component';
import {NewPatientVisitComponent} from './new-patient-visit/new-patient-visit.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PatientsComponent} from './patients/patients.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {AddAppointmentComponent} from './add-appointment/add-appointment.component';


const routes: Routes = [
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'new-patient-visit', component: NewPatientVisitComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'add-appointment', component: AddAppointmentComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
