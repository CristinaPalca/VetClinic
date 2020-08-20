import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SetDoctorService {

  private selectedDoctorSource = new Subject<string>();
  selectedDoctor$ = this.selectedDoctorSource.asObservable();

  constructor() { }

  updateSelectedDoctor(doctor: string){
    this.selectedDoctorSource.next(doctor);
  }
}
