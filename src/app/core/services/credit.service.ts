import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from '../models/credit';
const baseUrl = 'http://localhost:8989/credit';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) { }
  saveSimulator(credit: Credit): Observable<Credit> {
    const url = `${baseUrl}/simulator`
   return this.http.post<Credit>(url,credit);
  }
  getCredit():Observable<Credit[]> {
    const url = `${baseUrl}/getAll`
  return this.http.get<Credit[]>(url);
}
}
