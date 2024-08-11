import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketDto } from '../Models/dto/TicketDto';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
  [x: string]: any;

  constructor(private http : HttpClient) { }

  _API_GET_FIXED = "http://localhost:9999/api/ticket/get_tickets_fixed"
  _API_GET_FAILUR = "http://localhost:9999/api/ticket/get_tickets_failure"

  getAllTicketsFailur():Observable<TicketDto[]>{
      return this.http.get<TicketDto[]>(this._API_GET_FAILUR)
  }

  getAllTicketsFixed():Observable<TicketDto[]>{
    return this.http.get<TicketDto[]>(this._API_GET_FIXED)
}
}
