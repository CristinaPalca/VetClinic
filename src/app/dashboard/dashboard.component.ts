import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import {GetDataService} from '../get-data.service';
import {IAppointment, IPatient} from '../model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dailyAppointments: Array<IAppointment>;
  dailyPatients: Array<IPatient> = [];
  weeklyEvolution = [];

  hasAppointments = false;

  constructor(private data: GetDataService) { }

  ngOnInit(): void {

    let dateTemplate = '';
    if (new Date().getMonth() < 10){
      dateTemplate = new Date().getFullYear() + '-0' + new Date().getMonth();
    }else{
      dateTemplate = new Date().getFullYear() + '-' + new Date().getMonth();
    }
    if (new Date().getDate() < 10){
      dateTemplate += '-0' + new Date().getDate();
    }else{
      dateTemplate += '-' + new Date().getDate();
    }

    this.data.getAppointmentsByDate(dateTemplate).subscribe(item => {
      this.dailyAppointments = item;
      this.sortAppointments();
      if (this.dailyAppointments.length > 0){
        this.hasAppointments = true;
      }
      console.log(this.dailyAppointments);

      item.forEach(todayAppointment => {
        this.data.getPatientById(todayAppointment.animalId).subscribe(patient => {
          this.dailyPatients.push(patient);
        });
      });
      this.weeklyEvolution = this.getWeekStatistics();
      setTimeout(() => {
        this.getEvolutionByWeek();
      }, 500);

    });
  }

  sortAppointments(){
    this.dailyAppointments.sort((a, b) => {
      const dateA = new Date(a.date).getHours();
      const dateB = new Date(b.date).getHours();
      if (dateA === dateB){
        return 0;
      }else if (dateA > dateB){
        return 1;
      }
      return -1;
    });
  }

  getDate(str){
    return new Date(str);
  }
  getPatientName(id) {
    if (this.dailyPatients){
      for (let i = 0; i < this.dailyPatients.length; i++){
        if (this.dailyPatients[i].id === id){
          return this.dailyPatients[i].patientName;
        }
      }
    }else{
      //nothing to do
    }
  }
  getPatientBreed(id) {
    if (this.dailyPatients){
      for (let i = 0; i < this.dailyPatients.length; i++){
        if (this.dailyPatients[i].id === id){
          return this.dailyPatients[i].breed;
        }
      }
    }else{
      //nothing to do
    }
  }
  getDiagnosis(item){
    return this.data.getDiagnosis(item.diagnosis);
  }
  getStatus(statusId){
    return this.data.getStatus(statusId);
  }

  getWeekStatistics(){
    let tmpDay = new Date().getDate();
    let tmpArr = []; //to add days of week
    let evolArr = [];

    if (new Date().getDay() != 1){
      if (new Date().getDay() === 0){
        tmpDay -= 6;
      }else{
        tmpDay -= new Date().getDay() - 1;
      }
    }else {
      // nothing to do
    }
    for (let i = 0; i < 7; i++){
      evolArr[i] = 0;
      tmpArr[i] = tmpDay;
      tmpDay++;
    }

    for (let i = 0; i < 7; i++){
      let dayTemplate = '';
      if (new Date().getMonth() < 9){
        dayTemplate = new Date().getFullYear() + '-0' + (new Date().getMonth() + 1) + '-' + tmpArr[i];
      }else{
        dayTemplate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + tmpArr[i];
      }
      this.data.getAppointmentsByDate(dayTemplate).subscribe(appointmentsPerDay => {
        evolArr[i] += appointmentsPerDay.length;
      });
    }
    return evolArr;
  }


  getEvolutionByWeek(){
    let ctx = document.getElementById('week_chart');


    let chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'],
        datasets: [{
          label: 'Number of appointments',
          backgroundColor: '#5FB6D9',
          borderColor: '#5FB6D9',
          data: this.weeklyEvolution
        }]
      },

      // Configuration options go here
      options: {}
    });

  }

}
