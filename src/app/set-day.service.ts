import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SetDayService {

  private selectedDaySource = new Subject<string>();
  selectedDay$ = this.selectedDaySource.asObservable();

  constructor() { }

  updateSelectedDay(day: string){
    this.selectedDaySource.next(day);
  }

}
