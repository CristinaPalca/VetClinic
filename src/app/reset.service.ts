import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  private resetCalendarSource = new Subject();
  private resetHoursSource = new Subject();

  resetCalendar$ = this.resetCalendarSource.asObservable();
  resetHours$ = this.resetHoursSource.asObservable();


  constructor() { }

  resetCalendar(){
    this.resetCalendarSource.next();
  }
  resetHours(){
    this.resetHoursSource.next();
  }

}
