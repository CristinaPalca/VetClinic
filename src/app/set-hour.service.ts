import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetHourService {

  private selectedHourSource = new Subject<number>();
  selectedHour$ = this.selectedHourSource.asObservable();

  constructor() { }

  updateSelectedHour(hour: number){
    this.selectedHourSource.next(hour);
  }
}
