import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IAppointment, IDoctor, IPatient} from '../model';
import {GetDataService} from '../get-data.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

 @Input() appointment: IAppointment;
 @Output() updateClosed = new EventEmitter();
 @Output() updatedAppointment = new EventEmitter<IAppointment>();

  selectedYear: number;
  selectedMonth: number;
  selectedDay: number;
  selectedHour: number;
  selectedDoctorName: string;
  selectedPatientId: number;
  selectedStatus: number;
  diagnosis: string;

  months = [0, 1, 2, 3 , 4, 5, 6, 7, 8, 9, 10, 11];
  monthDays: Array<number>;
  openHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  doctors: Array<IDoctor>;
  patients: Array<IPatient>;
  statuses = ['Created', 'Confirmed', 'Done'];

 constructor(private getData: GetDataService) { }
 ngOnInit(): void {
   this.selectedYear = this.getInitialYear();
   this.selectedMonth = this.getInitialMonth();
   this.selectedDay = this.getInitialDay();
   this.selectedHour = this.getInitialHour();
   this.selectedDoctorName = this.appointment.doctorsName;
   this.selectedPatientId = this.appointment.animalId;
   this.selectedStatus = this.appointment.status;
   this.diagnosis = this.appointment.diagnosis;
   this.generateDays();

   this.getData.getDoctors().subscribe(items => {
     this.doctors = items;
   }, err => {console.log(err)});

   this.getData.getPatients().subscribe( items => {
     this.patients = items;
    /* for (let i = 0; i < this.patients.length; i++){
       if (this.patients[i].id === this.appointment.animalId){
         this.selectedPatient = this.patients[i];
         break;
       }
     }*/
   }, err => {console.log(err)});
 }

 printDate(){
   let date = new Date(this.appointment.date);
   date.setFullYear(this.selectedYear);
   date.setMonth(this.selectedMonth);
   date.setDate(this.selectedDay);
   date.setHours(this.selectedHour);
   console.log(date);
  }

 getInitialYear(){
   return new Date(this.appointment.date).getFullYear();
 }

 getInitialMonth(){
   return new Date(this.appointment.date).getMonth();
 }

 getInitialDay(){
   return new Date(this.appointment.date).getDate();
 }

 getInitialHour(){
   return new Date(this.appointment.date).getHours();
 }
 getInitialMinutes(){
   return new Date(this.appointment.date).getMinutes();
 }

  generateDays(){
    const daysInMonth = this.daysInMonth(this.selectedMonth, this.selectedYear);
    for (let i = 1; i <= daysInMonth; i++){
      if (this.monthDays){
        this.monthDays.push(i);
      }else{
        this.monthDays = [i];
      }
    }
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  getDiagnosis(){
   return this.getData.getDiagnosis(this.diagnosis);
  }
  checkDefaultPatient(patient){
   //return patient.id === this.selectedPatientId;
  }

  submitChanges(){
   this.appointment.date = this.getDateTemplate();
   this.appointment.doctorsName = this.selectedDoctorName;
   this.appointment.animalId = this.selectedPatientId;
   this.appointment.status = this.selectedStatus;
   this.appointment.diagnosis = this.diagnosis;
   console.log(this.appointment);
   this.updatedAppointment.emit(this.appointment);
   this.closeUpdate();
  }


  getDateTemplate(){
   let dateTemplate = '' + this.selectedYear + '-';
   let month = this.selectedMonth;
   if (month < 9){
     dateTemplate += '0' + ++month;
   }else{
     dateTemplate += ++month;
   }
   if (this.selectedDay < 10){
     dateTemplate += '-0' + this.selectedDay;
   }else{
     dateTemplate += '-' + this.selectedDay;
   }

   if (this.selectedHour < 10){
     dateTemplate += 'T0' + this.selectedHour + ':00:00';
   }else{
     dateTemplate += 'T' + this.selectedHour + ':00:00';
   }

   return dateTemplate;
  }

  closeUpdate(){
   this.updateClosed.emit();
  }
}
