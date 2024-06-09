import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  type = 'doughnut';
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      data: [65, 59, 45, 81, 56, 55, 40],
      backgroundColor: ["#f38b4a"],
    },{
        label: "My Second dataset",
        data: [80, 59, 75, 81, 85, 55, 40],
        backgroundColor: ["#6970d5"],
      }]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };
  constructor() { }

  ngOnInit(): void {
  }

}

