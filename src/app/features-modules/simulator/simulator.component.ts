import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credit } from 'src/app/core/models/credit';
import { CreditService } from 'src/app/core/services/credit.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
 

export class SimulatorComponent implements OnInit {
  duration: number;
  creditAmount: number;
  contribution: number;
  result: any;
  simulatorCredit = new FormGroup({
    duration: new FormControl('', Validators.required),
    creditAmount: new FormControl('', Validators.required),
    contribution: new FormControl('', Validators.required)
  });
  creditList: Credit[] =[];
  constructor(private creditService : CreditService){}

  ngOnInit(): void {
    this.getCredit();
    
  }
  getCredit(){
    this.creditService.getCredit().subscribe(
      (res) => {
        this.creditList=res;
        console.log(this.creditList)
      }
    )
  }
  saveCredit(){
    const credit = new Credit();
    credit.duration= this.simulatorCredit.controls.duration.value;
    credit.creditAmount= this.simulatorCredit.controls.creditAmount.value;
    credit.contribution= this.simulatorCredit.controls.contribution.value;

    this.creditService.saveSimulator(credit).subscribe(
      (res) => {
        this.result=res;
        console.log(this.result);
        Swal.fire({
          title: "Résultat du simulateur", 
          html: 'Votre paiement mensuel sera : ' + this.result + ' dinars',  
          confirmButtonText: "Compris !", 
        })
        if (this.result == 0){
          Swal.fire({
            title: "Résultat du simulateur", 
            html: 'Votre apport doit être égale ou supérieur à 20% du crédit demandé',  
            confirmButtonText: "Compris !", 
          })
        }
 
      }
      
    )
    
  }
 
}
