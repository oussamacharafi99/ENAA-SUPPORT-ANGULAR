import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonDto } from '../Models/dto/PersonDto';
import { Person } from '../Models/person';
import { Technician } from '../Models/technician';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private http : HttpClient) { }

  _API_GET_PERSONS = "http://localhost:9999/api/person/get_persons_dto";
  _API_GET_PERSONS_WITHOUT_ADMIN = "http://localhost:9999/api/person/get_Person";
  _API_GET_TECHNICIANS ="http://localhost:9999/api/person/get_technicians"
  _API_ADD_USER = "http://localhost:9999/api/person/user";
  _API_ADD_TECHNICIAN = "http://localhost:9999/api/person/technician";

  get_persons():Observable<PersonDto[]>{
    return this.http.get<PersonDto[]>(this._API_GET_PERSONS)
  }

  getPersonsWithoutAdmin():Observable<Person[]>{
     return this.http.get<Person[]>(this._API_GET_PERSONS_WITHOUT_ADMIN)
  }

  getTichnicians():Observable<Person[]>{
    return this.http.get<Person[]>(this._API_GET_TECHNICIANS)
 }

 public add_user(user : User):Observable<User>{
  return this.http.post<User>(this._API_ADD_USER, user);
}

public add_technician(technician : Technician):Observable<Technician>{
  return this.http.post<Technician>(this._API_ADD_TECHNICIAN, technician);
}



}
