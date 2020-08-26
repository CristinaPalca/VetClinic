import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreatePatientService {

  private createPatientSource = new Subject();
  createPatient$ = this.createPatientSource.asObservable();

  constructor() { }

  createPatient(){
    this.createPatientSource.next();
  }

}
