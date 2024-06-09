import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8989/user/';

let HTTPOptions: Object = {

  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  responseType: 'text'
}

@Injectable(
  { providedIn: "root" }
)
export class AuthService {

  constructor(private http: HttpClient) { }

  login(authenticationForm): Observable<any> {
    return this.http.post(AUTH_API + 'authenticate', {
      username: authenticationForm.get('username').value,
      password: authenticationForm.get('password').value
    }, HTTPOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, HTTPOptions);
  }
}
