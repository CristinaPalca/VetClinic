import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreateDateService {

  private year = new Date().getFullYear();
  private month = new Date().getMonth();
  private day = -1;
  private hour = -1;

 // private dateTempateSource = new Subject<string>();
  //dateTemplate$ = this.dateTempateSource.asObservable();

  constructor() { }



  getDateTemplate(){
    if (this.day > -1 && this.hour > -1){
      let dateTemplate = '' + this.year;
      if (this.month < 9){
        dateTemplate += '-0' + ++this.month;
      }else{
        dateTemplate += '-' + ++this.month;
      }
      if (this.day < 10){
        dateTemplate += '-0' + this.day;
      }else{
        dateTemplate += '-' + this.day;
      }
      if (this.hour < 10){
        dateTemplate += 'T0' + this.hour + ':00:00';
      }else{
        dateTemplate += 'T' + this.hour + ':00:00';
      }
      return dateTemplate;
    }
    return false;
  }

  resetDate(){
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth();
    this.day = -1;
    this.hour = -1;
  }
  setYear(value){
    this.year = value;
  }
  setMonth(value){
    this.month = value;
  }
  setDay(value){
    this.day = value;
  }
  setHour(value){
    this.hour = value;
  }
}
