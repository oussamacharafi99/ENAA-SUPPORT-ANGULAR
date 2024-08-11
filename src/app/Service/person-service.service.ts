import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonDto } from '../Models/dto/PersonDto';
import { Person } from '../Models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private http : HttpClient) { }

  _API_GET_PERSONS = "http://localhost:9999/api/auth/get_persons_dto";
  _API_GET_PERSONS_WITHOUT_ADMIN = "http://localhost:9999/api/auth/get_Person";

  get_persons():Observable<PersonDto[]>{
    return this.http.get<PersonDto[]>(this._API_GET_PERSONS)
  }

  getPersonsWithoutAdmin():Observable<Person[]>{
     return this.http.get<Person[]>(this._API_GET_PERSONS_WITHOUT_ADMIN)
  }

}
