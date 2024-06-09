import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
const baseUrl = 'http://localhost:8898';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http : HttpClient) { }



  register(user:User)
  {    const url = `${baseUrl}/user/saveUser`

    return this.http.post(url , user);
  }

  getStatForUserByMonth()
  {
    const url = `${baseUrl}/user/statByMonth`
    this.http.get(url)
  }


}
