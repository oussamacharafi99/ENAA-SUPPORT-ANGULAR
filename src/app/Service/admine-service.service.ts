import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmineServiceService {

  constructor(private http : HttpClient) { }

  _API_LOGIN = "http://localhost:9999/api/auth/login";
  _API_ADD_USER = "http://localhost:9999/api/auth/user";
  _API_ADD_TECHNICIAN = "http://localhost:9999/api/auth/technician";


  public login(){

  }

}
