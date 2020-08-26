import {Component, OnInit} from '@angular/core';
import {SetPopupService} from '../../set-popup.service';

@Component({
  selector: 'app-created-popup',
  templateUrl: './created-popup.component.html',
  styleUrls: ['./created-popup.component.css']
})
export class CreatedPopupComponent implements OnInit {

  private popupInfo = ['Appointment created', 'Something went wrong. Please, try again later.'];

  popupContent = this.popupInfo[0];

  constructor(private setPopupService: SetPopupService){
    setTimeout(() => {
      document.querySelector('.popup_container').classList.add('popup_hidden');
    }, 2000);
  }

  ngOnInit(): void {
    this.setPopupService.setPopup$.subscribe(next => {
      document.querySelector('.popup_container').classList.remove('popup_hidden');
      if (next){
        this.popupContent = this.popupInfo[0];
      }else{
        this.popupContent = this.popupInfo[1];
      }
      console.log(next);
    }, err => {console.log(err)});
  }


}
