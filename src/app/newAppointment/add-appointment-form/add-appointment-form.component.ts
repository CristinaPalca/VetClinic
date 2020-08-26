import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GetDataService} from '../../get-data.service';
import {IDoctor, IPatient} from '../../model';
import {ResetService} from '../../reset.service';
import {UpdateDataService} from '../../update-data.service';
import {CreatePatientService} from '../../create-patient.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-appointment-form',
  templateUrl: './add-appointment-form.component.html',
  styleUrls: ['./add-appointment-form.component.css']
})
export class AddAppointmentFormComponent implements OnInit {

  doctors: Array<IDoctor>;
  existingDoctorName = '';
  @Output() selectedDoctor = new EventEmitter<string>();
  newPatient: IPatient = {
    id: -1,
    patientName: '',
    breed: ''
  };
  @Output() newPatientId = new EventEmitter<number>();

  constructor(private getData: GetDataService,
              private resetDate: ResetService,
              private updateData: UpdateDataService,
              private createPatientService: CreatePatientService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData.getDoctors().subscribe(items => {
      this.doctors = items;
    }, err => {console.log(err)});
    this.getData.getPatients().subscribe(items => {
      for (const item of items){
        if (this.newPatient.id <= item.id){
          this.newPatient.id = item.id + 1;
        }
      }
      this.newPatientId.emit(this.newPatient.id);
    }, err => {console.log(err)});
    this.createPatientService.createPatient$.subscribe(next => {
      this.createPatient();
    }, err => {console.log(err)});
  }

  updateDoctor(){
    this.selectedDoctor.emit(this.existingDoctorName);
    this.resetDate.resetCalendar();
    this.resetDate.resetHours();
  }

  createPatient(){
    this.updateData.addPatient(this.newPatient).subscribe(next => {
      //
    }, err => {console.log(err)});
  }

  moveToExistingPatient(){
    this.router.navigate(['../add-appointment-existing'], {relativeTo: this.route});
  }
}
