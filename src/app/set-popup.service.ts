import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetPopupService {


  private setPopupSource = new Subject<boolean>();
  setPopup$ = this.setPopupSource.asObservable();

  constructor() { }

  displayPopup(value: boolean){
    this.setPopupSource.next(value);
  }
}
