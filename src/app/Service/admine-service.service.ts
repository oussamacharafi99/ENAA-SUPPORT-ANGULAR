import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../Models/person';
import { Observable } from 'rxjs';
import { JwtDto } from '../Models/Jwt';
import { User } from '../Models/user';
import { Technician } from '../Models/technician';

@Injectable({
  providedIn: 'root'
})
export class AdmineServiceService {

  constructor(private http : HttpClient) { }

  _API_LOGIN = "http://localhost:9999/api/auth/login";


  public login(person : Person):Observable<JwtDto>{
    return this.http.post<JwtDto>(this._API_LOGIN, person);
  }


}
