import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CreateDateService} from "../../create-date.service";
import {IAppointment} from "../../model";
import {GetDataService} from "../../get-data.service";
import {CreatePatientService} from "../../create-patient.service";
import {UpdateDataService} from "../../update-data.service";
import {root} from "rxjs/internal-compatibility";


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
// add appointment with new patient
// gets date from service
// gets new patient id

export class AddAppointmentComponent implements OnInit {


  private newAppointment: IAppointment = {
    id: -1,
    animalId: -1,
    date: '',
    doctorsName: '',
    diagnosis: '',
    status: 0
  };
  missingFields = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private createDate: CreateDateService,
              private getDataService: GetDataService,
              private updateDataService: UpdateDataService,
              private createPatientService: CreatePatientService) {
  }

  ngOnInit(): void {
    this.getDataService.getAppointments().subscribe( next => {
      next.forEach(item => {
        if (this.newAppointment.id <= item.id){
          this.newAppointment.id = item.id + 1;
        }
      });
    }, err => {console.log(err)});
  }

  cancelAppointment(){
    this.router.navigate(['../appointments'], {relativeTo: this.route});
  }

  createAppointment(){
    // send request to create new patient
    const date = this.createDate.getDateTemplate();
    if (date && this.newAppointment.doctorsName != ''){
      this.missingFields = false;
      this.newAppointment.date = date;
      this.createPatientService.createPatient();
      this.updateDataService.addAppointment(this.newAppointment).subscribe(next => {
        //console.log(next);
        //console.log(this.newAppointment);
        this.router.navigate(['../appointments'], {relativeTo: this.route});
      }, err => {console.log(err)});
    }else{
      this.missingFields = true;
    }
  }

  setPatientId($event){
    this.newAppointment.animalId = $event;
  }

  setDoctorName($event){
    this.newAppointment.doctorsName = $event;
  }
}
