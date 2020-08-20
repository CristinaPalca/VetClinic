import { Component, OnInit } from '@angular/core';
import {SetDayService} from '../set-day.service';
import {SetDoctorService} from '../set-doctor.service';
import {ResetService} from '../reset.service';
import {SetHourService} from "../set-hour.service";
import {IAppointment, IPatient} from "../model";
import {GetDataService} from "../get-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {


  newPatientName = '';
  newPatientBreed = '';
  doctorName = '';
  hour = -1;
  newAppointment: IAppointment = {
    id: -1,
    animalId: -1,
    date: '',
    doctorsName: '',
    diagnosis: '',
    status: 0
  };
  newPatient: IPatient = {
    id: -1,
    patientName: '',
    breed: ''
  }

  constructor(private setDayService: SetDayService,
              private setDoctorService: SetDoctorService,
              private resetService: ResetService,
              private setHourService: SetHourService,
              private getDataService: GetDataService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.setDayService.selectedDay$.subscribe(day => {
      console.log('from parent ' + day);
      this.resetHours();
    }, err => {console.log(err)});
    this.setDoctorService.selectedDoctor$.subscribe( doctor => {
      this.doctorName = doctor;
      this.resetCalendar();
    });
    this.setHourService.selectedHour$.subscribe(hour => {
      this.hour = hour;
    }, err => {console.log(err)});
    this.getDataService.getAppointments().subscribe( items => {
      items.forEach(item => {
        if (this.newPatient.id < item.id){
          this.newPatient.id = item.id + 1;
        }
      });
    });
    this.getDataService.getPatients().subscribe(items => {
      items.forEach(item => {
        if (this.newAppointment.animalId < item.animalId){
          this.newAppointment.animalId = item.animalId + 1;
        }
      });
    });
  }


  resetCalendar(){
    this.resetService.resetCalendar();
    this.resetService.resetHours();
    //set initial month
    // set style by default
  }

  resetHours(){
    // set style by default
    this.resetService.resetHours();
  }

  updateNewPatient($event){
    this.newPatientName = $event;
    //console.log($event);
  }
  updateNewPatientBreed($event){
    this.newPatientBreed = $event;
    //console.log($event);
  }


  cancelAppointment(){
    this.router.navigate(['/appointments'], {replaceUrl: true});
  }

  createAppointment(){
    console.log('new app');
    this.newPatient.patientName = this.newPatientName;
    this.newPatient.breed = this.newPatientBreed;
    this.newAppointment.animalId = this.newPatient.id;
    this.newAppointment.doctorsName = this.doctorName;
    //this.newAppointment.date = this.getDateTemplate();
    //console.log(this.newPatientName);
    //console.log(this.newPatientBreed);
    //console.log(this.doctorName);
   // console.log(this.hour);
    this.router.navigate(['/appointments'], {replaceUrl: true});
  }

  getDateTemaplate(){
    //let dateTemplate =
    //return '';
  }
}
