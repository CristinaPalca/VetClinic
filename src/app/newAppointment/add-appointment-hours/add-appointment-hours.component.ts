import { Component, OnInit } from '@angular/core';
import {ResetService} from '../../reset.service';
import {CreateDateService} from "../../create-date.service";


@Component({
  selector: 'app-add-appointment-hours',
  templateUrl: './add-appointment-hours.component.html',
  styleUrls: ['./add-appointment-hours.component.css']
})
export class AddAppointmentHoursComponent implements OnInit {

  constructor(private resetDate: ResetService,
              private createDate: CreateDateService) { }

  ngOnInit(): void {
    this.resetDate.resetHours$.subscribe( next => {
      this.resetHoursStyle();
    }, err => {console.log(err)});
  }

  selectHour($event, nr){
    this.resetHoursStyle();
    $event.target.classList.add('hour_selected');
    this.createDate.setHour(nr);
  }

  resetHoursStyle(){
    const hours = document.querySelectorAll('.hour');
    if (hours){
      hours.forEach(hour => {
        if (hour.classList.contains('hour_selected')){
          hour.classList.remove('hour_selected');
        }
      });
    }
  }

}
