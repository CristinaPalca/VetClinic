import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAppointment, IPatient} from "./model";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private root = 'https://veterinar-clinic-app.herokuapp.com';

  private appointmentsData = `${this.root}/data/getAppointments`;
  private appointmentByDateData = `${this.root}/data/getAppointmentsByDate`;
  private appointmentsByPatient = `${this.root}/data/getAppointmentsByAnimal`;
  private patientsData = `${this.root}/data/getPatients`;
  private patientByIdData = `${this.root}/data/getPatient`;
  private doctorsData = `${this.root}/data/getDoctors`;

  private statuses = ['Created', 'Confirmed', 'Done'];

  constructor(private http: HttpClient) { }

  getAppointments(){
    return this.http.get<any>(this.appointmentsData);
  }

  getPatients(){
    return this.http.get<any>(this.patientsData);
  }

  getPatientById(id){
    return this.http.get<IPatient>(this.patientByIdData + '/' + id);
  }

  getAppointmentsByDate(date){
    return this.http.get<Array<IAppointment>>(this.appointmentByDateData + '/' + date);
  }
  getAppointmentsByPatient(patientId){
    return this.http.get<Array<IAppointment>>(this.appointmentsByPatient + '/' + patientId);
  }

  getDoctors(){
    return this.http.get<any>(this.doctorsData);
  }

  getStatus(statusId){
    if (statusId >= 0 && statusId <= 2){
      return this.statuses[statusId];
    }
    return null;
  }

  getDiagnosis(str){
    if (str){
      return str;
    }else{
      return 'undefined';
    }
  }

}
