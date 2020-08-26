import {Component, Input, OnInit} from '@angular/core';
import {IAppointment, IPatient} from '../../model';
import {GetDataService} from "../../get-data.service";
import {SetPatientService} from "../../set-patient.service";

@Component({
  selector: 'app-add-appointment-history',
  templateUrl: './add-appointment-history.component.html',
  styleUrls: ['./add-appointment-history.component.css']
})
export class AddAppointmentHistoryComponent implements OnInit {

  appointments: Array<IAppointment>;
  patientId: number;

  constructor(private getData: GetDataService,
              private updatePatientId: SetPatientService) { }

  ngOnInit(): void {
    this.updatePatientId.patientId$.subscribe(nr => {
      this.patientId = nr;
      this.getData.getAppointmentsByPatient(this.patientId).subscribe(items => {
        if (items.length > 0){
          this.appointments = items;
          this.appointments.sort( (a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            if (dateA.getTime() > dateB.getTime()){
              return -1;
            }else if (dateA.getTime() === dateB.getTime()){
              return 0;
            }else{
              return 1;
            }
          });
        }
       // console.log(this.appointments);
      }, error => {console.log(error)});
    }, error => {console.log(error)});
  }


  getStatus(obj){
    return this.getData.getStatus(obj.status);
  }

  getDiagnosis(obj){
    return this.getData.getDiagnosis(obj.diagnosis);
  }

}
