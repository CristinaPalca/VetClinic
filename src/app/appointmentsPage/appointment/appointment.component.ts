import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IAppointment, IPatient} from '../../model';
import {GetDataService} from "../../get-data.service";
import {UpdateDataService} from "../../update-data.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  @Input() appointment: IAppointment;
  @Output() removed = new EventEmitter<number>();
  patient: IPatient;

  doneEnabled = false;
  undoEnabled = false;
  editEnabled = false;
  editPressed = false;
  extendedMenu = false;

  removeActive = false;

  constructor(private getData: GetDataService,
              private modifyData: UpdateDataService) { }


  ngOnInit(): void {
    this.refreshPatient();
    this.checkExtend();
  }

  refreshPatient(){
    this.getData.getPatientById(this.appointment.animalId).subscribe(patient => {
      this.patient = patient;
    }, error => {console.log(error)});
  }

  getStatus(){
    return this.getData.getStatus(this.appointment.status);
  }

  getDiagnosis(){
    return this.getData.getDiagnosis(this.appointment.diagnosis);
  }

  toggleMenu(){
    this.extendedMenu = !this.extendedMenu;
  }

  checkExtend(){
    if (this.appointment.status === 1){
      this.doneEnabled = true;
    } else{
      this.doneEnabled = false;
    }

    if (this.appointment.status === 2){
      this.undoEnabled = true;
    } else{
      this.undoEnabled = false;
    }

    if (this.appointment.status !== 2){
      this.editEnabled = true;
    } else{
      this.editEnabled = false;
    }
  }

  setDone(){
    this.appointment.status = 2;
  }

  undoDone(){
    if (this.appointment.status === 2){
      this.appointment.status = 1;
    }
  }

  removeAppointment() {
    this.removed.emit(this.appointment.id);
    this.toggleConfirm();
  }


  toggleConfirm(){
    this.removeActive = !this.removeActive;
  }

  toggleExtendEdit(){
    this.editPressed = !this.editPressed;
  }

  updateAppointment($event){
    this.appointment = $event;
    this.refreshPatient();
  }

}
