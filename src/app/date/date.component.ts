import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {


  private dateTemplate = '';

  constructor() { }

  ngOnInit(): void {
    this.setDate();
  }


  setDate(){
    this.dateTemplate += new Date().getFullYear();

    if (new Date().getMonth() < 9){
      this.dateTemplate += '-0' + (new Date().getMonth() + 1);
    }else{
      this.dateTemplate += '-' + (new Date().getMonth() + 1);
    }
    if (new Date().getDate() < 10){
      this.dateTemplate += '-0' + new Date().getDate();
    }else{
      this.dateTemplate += '-' + new Date().getDate();
    }
  }

  getDate(){
    if (this.dateTemplate){
      return this.dateTemplate;
    }else{
      return null;
    }
  }

}
