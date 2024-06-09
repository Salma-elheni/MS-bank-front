import { Component, OnInit } from '@angular/core';
import {TransactionService} from "../../core/services/transaction.service";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(private transactionService:TransactionService) { }

  selectedAccount;

  accounts:any[]=[];

  type = 'line';
  chartData :any;
  options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  data: any[]=[];
  labels: any[]=[];

  backgroundColor: any[]=[];
  data2: any[]=[];
  labels2: any[]=[];


  selectedFilter: any="day";
  dateFilter: Date;
  type2 = 'bar';
  chartData2 :any;
  options2 = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  ngOnInit(): void {
    this.transactionService.gatAllAccount().subscribe((value:any[]) => {
      this.accounts = value;

    });


  }

  getTransactionByAccount(){

    this.backgroundColor =[];
    this.data=[];
    this.labels =[];

    this.transactionService.gatTransactionStatisticByAccount(this.selectedAccount.id).subscribe((value:any[]) => {
      console.log(value);
      value.forEach(value1 => {
        this.labels.push(value1.date+" ( "+value1.amount +" )");
        this.data.push(value1.balance);
        if(value1.amount<0){
          this.backgroundColor.push("#F3472F");
        }else {
          this.backgroundColor.push("#0DB2AF");
        }

      })
      this.chartData={
        labels: this.labels,
        datasets: [{
          label: "Balance",
          data: this.data,
          fill: false,
          borderColor: "#0DB2AF",
          tension: 0.1
        }]
      };
    });
  }


  getTransactionByFilter() {

    this.backgroundColor =[];
    this.data2=[];
    this.labels2 =[];

    let data:any={
      "filterType": this.selectedFilter,
      "date":this.dateFilter+" 1:18:27"
    };

    this.transactionService.gatTransactionStatisticByFilter(data).subscribe((value:any[]) => {
      console.log(value);
      value.forEach(value1 => {
        this.labels2.push(value1.series);
        this.data2.push(value1.data);
        this.backgroundColor.push("#0DB2AF");
      });
      let label="hour";
      if(this.selectedFilter=="month"){
        label="day"
      }else if(this.selectedFilter=="year"){
        label="month"
      }


      this.chartData2={
        labels: this.labels2,
        datasets: [{
          label: label,
          data: this.data2,
          backgroundColor: this.backgroundColor,
        }]
      };


    });

  }
}
