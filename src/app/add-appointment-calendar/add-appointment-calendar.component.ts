import { Component, OnInit } from '@angular/core';
import {SetDayService} from '../set-day.service';
import {ResetService} from '../reset.service';

@Component({
  selector: 'app-add-appointment-calendar',
  templateUrl: './add-appointment-calendar.component.html',
  styleUrls: ['./add-appointment-calendar.component.css']
})
export class AddAppointmentCalendarComponent implements OnInit {

  private monthPointer = new Date().getMonth();
  private monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  monthDays: Array<Array<string>>;
  private selectedDay = -1;
  private activeYear = new Date().getFullYear();



  constructor(private setDayService: SetDayService,
              private resetService: ResetService) { }

  ngOnInit(): void {
    this.resetCalendar();
    this.resetService.resetCalendar$.subscribe( () => {
      this.resetCalendar();
    }, err => {console.log(err)});
  }
  getMonth(){
    return this.monthsArr[this.monthPointer];
  }
  getYear(){
    return this.activeYear;
  }

  resetCalendar(){
    this.setDays(new Date().getFullYear(), new Date().getMonth());
    this.monthPointer = new Date().getMonth();
    this.activeYear = new Date().getFullYear();
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

  getPreviousMonth(){
    if (this.monthPointer <= 0){
      this.monthPointer = 11;
      this.activeYear--;
    } else{
      this.monthPointer--;
    }
    this.setDays(this.activeYear, this.monthPointer);
  }

  getNextMonth(){
    if (this.monthPointer >= 11){
      this.monthPointer = 0;
      this.activeYear++;
    }else{
      this.monthPointer++;
    }
    this.setDays(this.activeYear, this.monthPointer);
  }


  selectDay($event){
    const dayStr = $event.target.textContent;
    //console.log(typeof $event.target.textContent);
    this.removeSelectedDays();
    $event.target.classList.add('selected_day');
    this.setDayService.updateSelectedDay(dayStr);
  }

  removeSelectedDays(){
    let tmpDays = document.querySelectorAll('.selected_day');
    if (tmpDays){
      tmpDays.forEach(item => {
        item.classList.remove('selected_day');
      });
    }
  }

}
