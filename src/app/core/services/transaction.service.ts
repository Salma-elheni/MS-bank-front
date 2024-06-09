import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
const baseUrl = 'http://localhost:8989';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  gatAllAccount() {
    const url = `${baseUrl}/account`
    return this.http.get(url);
  }

  gatTransactionStatisticByAccount(id:number) {
    const url = `${baseUrl}/transaction-statistic/`+id;
    return this.http.get(url);
  }

  gatTransactionStatisticByFilter(data:any) {
    const url = `${baseUrl}/transaction-statistic`;
    return this.http.post(url,data);
  }

}
