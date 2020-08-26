import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SetPatientService {

  private patientIdSource = new Subject<number>();
  patientId$ = this.patientIdSource.asObservable();

  constructor() { }

  updateSelectedPatientId(nr: number){
    this.patientIdSource.next(nr);
  }
}
