import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditService } from 'src/app/core/services/credit.service';
import { RequestService } from 'src/app/core/services/request.service';
import { TransactionService } from 'src/app/core/services/transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  approuvedRequestList: any [] =[];
  NotApprouvedRequestList: any [] =[];
  requestList: any [] =[];
  creditList: any [] =[];
  countRequest: any
  constructor(private router: Router, private requestService : RequestService,private creditService : CreditService,
    private transactionService : TransactionService) { }

  ngOnInit(): void {
    this.getRequest();
  }
  navigateToNotification(){
    this.router.navigateByUrl('notification');
  }

  navigateToSimulator(){
    this.router.navigateByUrl('simulator');
  }
  navigateToStatistics(){
    this.router.navigateByUrl('statistics');
  }
  navigateToClaim(){
    this.router.navigateByUrl('claim');
  }
  navigateToPersonal(){
    this.router.navigateByUrl('personal');
  }
  navigateToTransaction(){
    this.router.navigateByUrl('transaction');
  }
  getRequest(){
    this.requestService.getRequest().subscribe(
      (res) => {
        this.requestList = res;
        this.requestList.forEach( request => {
          if (request.approved){
            this.approuvedRequestList.push(request);
          }else{
            this.NotApprouvedRequestList.push(request);
          }
        });

        this.countRequest= res.length;
        console.log(this.requestList)
      }
    )
  }
  getCredit(){
    this.creditService.getCredit().subscribe(
   (res) => {
     this.creditList=res;
   })

  }

}
