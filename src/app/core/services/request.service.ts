import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:5050';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }


  getRequest():Observable<Request[]> {
    const url = `${baseUrl}/request/getAllRequests`
  return this.http.get<Request[]>(url);
}

register(request:Request)
{    const url = `${baseUrl}/claim/save`

  return this.http.post(url , request);
}

}
