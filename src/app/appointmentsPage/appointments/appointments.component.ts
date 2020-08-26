import { Component, OnInit } from '@angular/core';
import {IAppointment, IPatient} from '../../model';
import {GetDataService} from '../../get-data.service';
import {UpdateDataService} from "../../update-data.service";
import {SetPopupService} from "../../set-popup.service";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments: Array<IAppointment>;
  patients: Array<IPatient>;

  private sortIndex = -1;
  filterIndex = -1;
  filterValue = '';
  private filterCategories = ['Date', 'Doctor', 'Patient', 'Status', 'Diagnosis'];

  constructor(private getData: GetDataService,
              private updateData: UpdateDataService,
              private setPopupService: SetPopupService) { }

  ngOnInit(): void {
    this.refreshPage();

    this.setPopupService.setPopup$.subscribe( value => {
      if (value){
        console.log('succeded ', + value);
      }else{
        console.log('failed');
      }
    }, err => {console.log(err)});
  }

  refreshPage(){
    this.getData.getAppointments().subscribe( items => {
      this.appointments = items;
      this.sortIndex = 1;
      this.sortByColumn(1);

    }, error => {console.log(error);});
    this.getData.getPatients().subscribe( patients => {
      this.patients = patients;
    }, err => {console.log(err);});
  }

  sortByColumn(columnNr){
    const headerSortedItem = document.querySelectorAll('.header_sort .active');

    if (headerSortedItem){
      headerSortedItem.forEach(item => {
        item.classList.remove('active');
      });
    }
    let multiply = 1;
    if (this.sortIndex === columnNr){
      multiply = -1;
      document.querySelectorAll('.header_sort .descending')[columnNr - 1].classList.add('active');
      this.sortIndex = -1;
    }else{
      multiply = 1;
      document.querySelectorAll('.header_sort .ascending')[columnNr - 1].classList.add('active');
      this.sortIndex = columnNr;
    }
    switch (columnNr){
      case 1: {
        this.appointments.sort((a, b) => {
          const tmpTimeA = new Date(a.date);
          const tmpTimeB = new Date(b.date);
          if (tmpTimeA.getTime() === tmpTimeB.getTime()){
            return 0;
          }else {
            return (tmpTimeA.getTime() < tmpTimeB.getTime()) ? multiply * (-1) : multiply * 1;
          }
        });
        break;
      }
      case 2: {
        this.appointments.sort((a, b) => {

          if (a.doctorsName  === b.doctorsName){
            return 0;
          }else if (a.doctorsName > b.doctorsName){
            return 1 * multiply;
          }
          return -1 * multiply;
        });

        break;
      }
      case 3: {
        this.appointments.sort((a, b) => {
          const patientA = this.patients.find((animal) => animal.id === a.animalId);
          const patientB = this.patients.find((animal) => animal.id === b.animalId);
          if (patientA.patientName  === patientB.patientName){
            return 0;
          }else if (patientA.patientName > patientB.patientName){
            return 1 * multiply;
          }
          return -1 * multiply;
        });
        break;
      }
      case 4: {
        this.appointments.sort((a, b) => {

          if (a.status  === b.status){
            return 0;
          }else if (a.status > b.status){
            return 1 * multiply;
          }
          return -1 * multiply;
        });

        break;
      }
      case 5: {
        this.appointments.sort((a, b) => {

          if (a.diagnosis  === b.diagnosis){
            return 0;
          }else if (a.diagnosis > b.diagnosis){
            return 1 * multiply;
          }
          return -1 * multiply;
        });

        break;
      }
      default: console.log('no such field for sorting');
    }
  }

  filterByColumn(){
    if (this.filterIndex > -1 && this.filterIndex <= this.filterCategories.length){
      console.log(this.filterValue);
      const items = document.querySelectorAll('.table_content');
      const value = this.filterValue.toLowerCase();
      switch (this.filterCategories[this.filterIndex]){
        case 'Date': {
          Array.from(items).forEach((elem) => {
            const innerProperties = elem.querySelectorAll('.date div');
            console.log(innerProperties);
            if ((innerProperties[0].textContent.toLowerCase().indexOf(value) != -1) ||
              (innerProperties[1].textContent.toLowerCase().indexOf(value) != -1) ){
              if (elem.classList.contains('hidden')) { elem.classList.remove('hidden'); }
            } else{
              elem.classList.add('hidden');
            }
          });
          break;
        }
        case 'Doctor': {
          Array.from(items).forEach((elem) => {
            const innerProperties = elem.querySelector('.doctor');
            console.log(innerProperties);
            if ((innerProperties.textContent.toLowerCase().indexOf(value) != -1)){
              if (elem.classList.contains('hidden')) { elem.classList.remove('hidden'); }
            } else{
              elem.classList.add('hidden');
            }
          });
          break;
        }
        case 'Patient': {
          Array.from(items).forEach((elem) => {
            const innerProperties = elem.querySelector('.doctor');
            console.log(innerProperties);
            if ((innerProperties.textContent.toLowerCase().indexOf(value) != -1)){
              if (elem.classList.contains('hidden')) { elem.classList.remove('hidden'); }
            } else{
              elem.classList.add('hidden');
            }
          });
          break;
        }
        case 'Status': {
          Array.from(items).forEach((elem) => {
            const innerProperties = elem.querySelector('.status');
            console.log(innerProperties);
            if ((innerProperties.textContent.toLowerCase().indexOf(value) != -1)){
              if (elem.classList.contains('hidden')) { elem.classList.remove('hidden'); }
            } else{
              elem.classList.add('hidden');
            }
          });
          break;
        }
        case 'Diagnosis': {
          Array.from(items).forEach((elem) => {
            const innerProperties = elem.querySelector('.diagnosis');
            console.log(innerProperties);
            if ((innerProperties.textContent.toLowerCase().indexOf(value) != -1)){
              if (elem.classList.contains('hidden')) { elem.classList.remove('hidden'); }
            } else{
              elem.classList.add('hidden');
            }
          });
          break;
        }
        default: console.log(typeof this.filterIndex);
      }
    }
  }

  onRemoved($event){
    for (let i = 0; i < this.appointments.length; i++){
      if (this.appointments[i].id === $event){
        this.updateData.removeAppointment(this.appointments[i]).subscribe(next => {
          console.log(next);
 //         console.log('appointment removed');
          this.appointments.splice(i, 1);
        }, err => {console.log(err)});
      }
    }
  }


  setCustomMonth(item){
    console.log(item.date);
    console.log(new Date(item.date));
    let app = new Date(item.date);
    app.setMonth(3);
    console.log(app);
    console.log(new Date('2020-04-04T12:00'));
  }

}
