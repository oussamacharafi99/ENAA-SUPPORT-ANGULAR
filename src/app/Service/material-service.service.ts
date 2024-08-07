import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../Models/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialServiceService {
  constructor(private http: HttpClient) { }

  private _API_GET_MATERIALS = "http://localhost:9999/api/material/getall";

  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(this._API_GET_MATERIALS);
  }
}
