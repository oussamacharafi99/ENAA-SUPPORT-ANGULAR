import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Panne } from '../Models/panne';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PanneServiceService {
  constructor(private http : HttpClient) { }

  _API_GET_PANNES = "http://localhost:9999/api/panne/get";
  _API_ADD_PANNES = "http://localhost:9999/api/panne/add";

  get_pannes():Observable<Panne[]>{
    return this.http.get<Panne[]>(this._API_GET_PANNES)
  }

  add_pannes(panne : Panne):Observable<Panne>{
    return this.http.post<Panne>(this._API_ADD_PANNES, panne);
  }



}
