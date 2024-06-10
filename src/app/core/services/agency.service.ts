import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agency } from '../models/agency.model';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  private baseUrl = 'http://localhost:6060'; // Adjust this URL to match your backend endpoint

  constructor(private http: HttpClient) { }

  getAllAgencies(): Observable<Agency[]> {
    return this.http.get<Agency[]>(`http://localhost:6060/agencies`);
  }

  getAgencyById(id: number): Observable<Agency> {
    return this.http.get<Agency>(`${this.baseUrl}/agency/${id}`);
  }

  addAgency(agency: Agency): Observable<Agency> {
    return this.http.post<Agency>(`${this.baseUrl}/addAgency`, agency);
  }

  deleteAgency(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  updateAgency(id: number, agency: Agency): Observable<Agency> {
    return this.http.put<Agency>(`${this.baseUrl}/edit/${id}`, agency);
  }
}
