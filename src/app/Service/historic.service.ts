import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Historic } from '../Models/historic';

@Injectable({
  providedIn: 'root'
})
export class HistoricService {

  constructor(private http : HttpClient) { }

  private _API_GET_RAPPORT = "http://localhost:9999/api/historic"
  private _API_GET_HISTORIC = "http://localhost:9999/api/historic/all"

  getRapport(id: number): Observable<Blob> {
    return this.http.get(this._API_GET_RAPPORT + '/' + id + "/panne/pdf", {
        responseType: 'blob'
    });
  }

  getHistoric(): Observable<Historic[]>{
    return this.http.get<Historic[]>(this._API_GET_HISTORIC)
  }


}
