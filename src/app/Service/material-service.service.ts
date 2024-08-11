import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../Models/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialServiceService {
  [x: string]: any;
  constructor(private http: HttpClient) { }

  private _API_GET_MATERIALS = "http://localhost:9999/api/material/getall";
  private _API_ADD_MATERIALS = "http://localhost:9999/api/material/add";
  private _API_DELETE_MATERIALS = "http://localhost:9999/api/material/remove"
  private _API_UPDATE_MATERIALS = "http://localhost:9999/api/material/update"

  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(this._API_GET_MATERIALS);
  }

  addMaterials(material : Material):Observable<Material>{
    return this.http.post<Material>(this._API_ADD_MATERIALS, material)
  }

  updateMaterials( material : Material):Observable<Material>{
    return this.http.put<Material>(this._API_UPDATE_MATERIALS +'/'+ material.id, material)
  }


  removeMaterials(id : number){
      return this.http.delete(this._API_DELETE_MATERIALS +'/'+id);
  }


}
