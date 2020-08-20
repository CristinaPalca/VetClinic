import { Component, OnInit } from '@angular/core';
import {ResetService} from '../reset.service';
import {SetHourService} from "../set-hour.service";

@Component({
  selector: 'app-add-appointment-hours',
  templateUrl: './add-appointment-hours.component.html',
  styleUrls: ['./add-appointment-hours.component.css']
})
export class AddAppointmentHoursComponent implements OnInit {

  constructor(private resetService: ResetService,
              private setHourService: SetHourService) { }

  ngOnInit(): void {
    this.resetService.resetHours$.subscribe( () => {
      this.resetHoursStyle();
    }, err => {console.log(err)});
  }

  selectHour($event, nr){
    this.resetHoursStyle();
    $event.target.classList.add('hour_selected');
    this.setHourService.updateSelectedHour(nr);
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
