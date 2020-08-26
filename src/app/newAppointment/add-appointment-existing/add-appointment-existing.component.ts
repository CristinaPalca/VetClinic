import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IAppointment, IPatient} from "../../model";
import {GetDataService} from "../../get-data.service";
import {CreateDateService} from "../../create-date.service";
import {UpdateDataService} from "../../update-data.service";
import {SetPatientService} from "../../set-patient.service";

@Component({
  selector: 'app-add-appointment-existing',
  templateUrl: './add-appointment-existing.component.html',
  styleUrls: ['./add-appointment-existing.component.css']
})
export class AddAppointmentExistingComponent implements OnInit {

  newAppointment: IAppointment = {
    id: -1,
    animalId: -1,
    date: '',
    doctorsName: '',
    diagnosis: '',
    status: 0
  };
  missingFields = false;
  historyLoaded = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private getDataService: GetDataService,
              private createDate: CreateDateService,
              private updateData: UpdateDataService,
              private updateSelectedPatient: SetPatientService) {
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
    if (date && this.newAppointment.doctorsName != '' && this.newAppointment.animalId > 0){
      this.missingFields = false;
      this.newAppointment.date = date;
      this.updateData.addAppointment(this.newAppointment).subscribe(next => {
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
    this.historyLoaded = true;
    this.updateSelectedPatient.updateSelectedPatientId($event);
  }

  setDoctorName($event){
    this.newAppointment.doctorsName = $event;
  }
}
