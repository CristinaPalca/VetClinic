import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GetDataService} from '../get-data.service';
import {IDoctor} from '../model';
import {SetDoctorService} from '../set-doctor.service';

@Component({
  selector: 'app-add-appointment-form',
  templateUrl: './add-appointment-form.component.html',
  styleUrls: ['./add-appointment-form.component.css']
})
export class AddAppointmentFormComponent implements OnInit {

  doctors: Array<IDoctor>;
  existingDoctorName = '';
  newPatientName = '';
  newPatientBreed = '';
  @Output() newPatientOutput = new EventEmitter<string>();
  @Output() newPatientBreedOutput = new EventEmitter<string>();

  constructor(private getData: GetDataService,
              private setDoctor: SetDoctorService) { }

  ngOnInit(): void {
    this.getData.getDoctors().subscribe(items => {
      this.doctors = items;
    }, err => {console.log(err)});
  }

  updateDoctor(){
    //console.log(this.existingDoctorName);
    this.setDoctor.updateSelectedDoctor(this.existingDoctorName);
  }


  sendPatientNameToParent(){
    this.newPatientOutput.emit(this.newPatientName);
  }
  sendPatientBreedToParent(){
    this.newPatientBreedOutput.emit(this.newPatientBreed);
  }
}
