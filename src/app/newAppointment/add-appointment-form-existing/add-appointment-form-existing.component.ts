import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IDoctor, IPatient} from "../../model";
import {GetDataService} from "../../get-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ResetService} from "../../reset.service";

@Component({
  selector: 'app-add-appointment-form-existing',
  templateUrl: './add-appointment-form-existing.component.html',
  styleUrls: ['./add-appointment-form-existing.component.css']
})
export class AddAppointmentFormExistingComponent implements OnInit {
  doctors: Array<IDoctor>;
  existingDoctorName = '';
  @Output() selectedDoctor = new EventEmitter<string>();
  patientId = -1;
  @Output() patientIdOutput = new EventEmitter<number>();
  patients: Array<IPatient>;

  constructor(private getData: GetDataService,
              private router: Router,
              private route: ActivatedRoute,
              private resetDate: ResetService) { }

  ngOnInit(): void {
    this.getData.getPatients().subscribe( items => {
      this.patients = items;
    }, err => {console.log(err)});
    this.getData.getDoctors().subscribe(items => {
      this.doctors = items;
    }, err => {console.log(err)});
  }
  updatePatient(){
    this.patientIdOutput.emit(this.patientId);
  }

  updateDoctor(){
    this.selectedDoctor.emit(this.existingDoctorName);
    this.resetDate.resetCalendar();
    this.resetDate.resetHours();
  }


  moveToNewPatient(){
    this.router.navigate(['../add-appointment'], {relativeTo: this.route});
  }
}
