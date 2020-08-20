import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../get-data.service';
import {IPatient} from '../model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: Array<IPatient>;

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.getData.getPatients().subscribe(items => {
      this.patients = items;
    }, err => {console.log(err)});
  }

}
