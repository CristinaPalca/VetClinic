import { Component, OnInit } from '@angular/core';
import {IAppointment, IPatient} from '../model';
import {GetDataService} from '../get-data.service';
import {Chart} from 'node_modules/chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  appointments: Array<IAppointment>;
  patients: Array<IPatient>;
  private doctors: Array<string>;
  private activeYear = new Date().getFullYear();

  constructor(private data: GetDataService) { }

  ngOnInit(): void {
    this.data.getAppointments().subscribe(item => {
      this.appointments = item;
    }, err => {console.log(err)} );
    this.data.getPatients().subscribe(item => {
        this.patients = item;
      },
      err => { console.log(err)});
    this.data.getDoctors().subscribe(item => {
      this.doctors = item;
    }, err => { console.log(err)});
    setTimeout(() => {
      this.generateEvolutionOfYear();
      this.getEvolutionByPatient();
      this.getEvolutionByStatus();
    }, 500);
  }

  generateEvolutionOfYear(){
    var ctx = document.getElementById('year_chart');

    // get stats by months
    var statMonths = [];
    for (let i = 0; i < 12; i++) {
      statMonths[i] = 0;
    }
    for (let i = 0; i < this.appointments.length; i++){
      const elDate = new Date(this.appointments[i].date);
      if (elDate.getFullYear() === this.activeYear){
        statMonths[elDate.getMonth()]++;
      }
    }

    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
          'October', 'November', 'December'],
        datasets: [{
          label: 'Nr of appointments',
          fill: false,
          borderColor: '#F21905',
          data: statMonths
        }]
      },

      // Configuration options go here
      options: {}
    });

  }

  getEvolutionByPatient(){

    let statPatients = [];
    let namePatients = [];
    for (let i = 0; i < this.patients.length; i++){
      statPatients[i] = 0;
      namePatients[i] = this.patients[i].patientName;
      this.appointments.forEach( item => {
        if (item.animalId === this.patients[i].id){
          statPatients[i]++;
        }
      });
    }

    var ctx = document.getElementById('patients_chart');

    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'horizontalBar',

      // The data for our dataset
      data: {
        labels: namePatients,
        datasets: [{
          label: 'Nr of appointments',
          backgroundColor: '#23D9B7',
          data: statPatients
        }]
      },

      // Configuration options go here
      options: {
        title: {
          display: false
        }
      }
    });
  }

  getEvolutionByStatus(){
    let countInProgress = 0;
    let countDone = 0;

    for ( let i = 0; i < this.appointments.length; i++){
      if (this.appointments[i].status === 0 || this.appointments[i].status === 1){
        countInProgress++;
      }else{
        countDone++;
      }
    }

    var ctx = document.getElementById('status_chart');

    new Chart( ctx,
      {type: "doughnut",
        data:
          {labels: ["In progress", "Done"],
            datasets: [
              {label: "My First Dataset",
                data: [countInProgress, countDone],
                backgroundColor: ["#6204BF","#F205CB"]}]}});
  }

}
