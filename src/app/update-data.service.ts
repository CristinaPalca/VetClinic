import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAppointment, IPatient} from './model';

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {

  private root = 'https://veterinar-clinic-app.herokuapp.com';

  private createAppointmentUrl = `${this.root}/data/addAppointment`;
  private createPatientUrl = `${this.root}/data/addPatient`;
  private createDoctorUrl = `${this.root}/data/addDoctor`;
  private updateAppointmentUrl = `${this.root}/data/updateAppointment`;
  private removeAppointmentUrl = `${this.root}/data/removeAppointment`;

  private statuses = ['Created', 'Confirmed', 'Done'];

  constructor(private http: HttpClient) { }

  addPatient(patient: IPatient){
    return this.http.post<any>(this.createPatientUrl, patient);
  }

  addAppointment(appointment: IAppointment){
    return this.http.post<any>(this.createAppointmentUrl, appointment);
  }

  addDoctor(doctorName){
    return this.http.post<any>(this.createDoctorUrl, doctorName);
  }

  updateAppointment(app: IAppointment){
    return this.http.put<any>(this.updateAppointmentUrl, app);
  }


  removeAppointment(app: IAppointment){
    return this.http.post<any>(this.removeAppointmentUrl, app);
  }

}
