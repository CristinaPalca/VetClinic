import {Component, Input, OnInit} from '@angular/core';
import {IAppointment, IPatient} from '../../model';
import {GetDataService} from '../../get-data.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  @Input() patient: IPatient;
  appointments: Array<IAppointment>;
  historyExtended = false;

  extendBtnStatuses = ['Display history', 'Hide history'];
  extendBtnContent: string;


  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.extendBtnContent = this.extendBtnStatuses[0];
    this.getData.getAppointmentsByPatient(this.patient.id).subscribe(items => {
      this.appointments = items;
      this.sortAppointments();
    }, err => {console.log(err)});
  }

  sortAppointments(){
    this.appointments.sort( (a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA.getTime() === dateB.getTime()){
        return 0;
      }else if (dateA.getTime() > dateB.getTime()){
        return -1;
        }else{
        return 1;
      }
      }
    );
  }

  getStatus(obj: IAppointment){
    return this.getData.getStatus(obj.status);
  }

  getDiagnosis(obj){
    return this.getData.getDiagnosis(obj.diagnosis);
  }

  toogleExtendHistory(){
    if (this.historyExtended){
      this.extendBtnContent = this.extendBtnStatuses[0];
    }else{
      this.extendBtnContent = this.extendBtnStatuses[1];
    }
    this.historyExtended = !this.historyExtended;
  }

  redirectCreateAppointment(){
    console.log('redirect clicked');
  }


}
