import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private monthPointer = new Date().getMonth();
  private monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  private activeYear = new Date().getFullYear();
  monthDays: Array<Array<string>> = [];
  constructor() { }

  ngOnInit(): void {
    this.setDays(new Date().getFullYear(), new Date().getMonth());
  }



  getPreviousMonth(){
    if (this.monthPointer > 0){
      this.monthPointer--;
    }else{
      this.activeYear--;
      this.monthPointer = 11;
    }
    this.setDays(this.activeYear, this.monthPointer);
  }
  getNextMonth(){
    if (this.monthPointer < 11){
      this.monthPointer++;
    }else{
      this.activeYear++;
      this.monthPointer = 0;
    }
    this.setDays(this.activeYear, this.monthPointer);
  }

  getMonth(){
    return this.monthsArr[this.monthPointer];
  }
  getYear(){
    return this.activeYear;
  }

  setDays(year, month){
    this.monthDays = [];
    const firstDay = new Date(year, month).getDay();
    let date = 1;
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    for (let i = 0; i < 6; i++){
      for (let j = 0; j < 7; j++){
        let day = '';
        if (i === 0 && j < firstDay){
          // nothing to do
        }else if (date > daysInMonth){
          break;
        }else{
          day = date.toString();
          date++;
        }

        if (this.monthDays[i]){
          this.monthDays[i].push(day);
        }else{
          this.monthDays[i] = [day];
        }
      }
    }
  }

  checkDay(cell){
    if (cell == new Date().getDate() && this.monthPointer === new Date().getMonth()
    && this.activeYear === new Date().getFullYear()){
      return true;
    }
    return false;
  }

}
