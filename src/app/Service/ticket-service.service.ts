import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketDto } from '../Models/dto/TicketDto';
import { Ticket } from '../Models/ticket';
import { TicketsTechnicianIdDto } from '../Models/dto/TicketsTechnicianIdDto';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
  [x: string]: any;

  constructor(private http : HttpClient) { }

  _API_GET_FIXED = "http://localhost:9999/api/ticket/get_tickets_fixed"
  _API_GET_FAILUR = "http://localhost:9999/api/ticket/get_tickets_failure"
  _API_GET_PROCESSING = "http://localhost:9999/api/ticket/get_tickets_processing"
  _API_UPDATE = "http://localhost:9999/api/ticket/update_by_admin"

  getAllTicketsFailur():Observable<TicketDto[]>{
      return this.http.get<TicketDto[]>(this._API_GET_FAILUR)
  }

  getAllTicketsFixed():Observable<TicketDto[]>{
    return this.http.get<TicketDto[]>(this._API_GET_FIXED)
   }
  
  getAllTicketsProcessing():Observable<TicketDto[]>{
    return this.http.get<TicketDto[]>(this._API_GET_PROCESSING)
   }

  updateTicketsByAdmin(id : number, ticket : TicketsTechnicianIdDto ):Observable<TicketsTechnicianIdDto>{
      return this.http.put<TicketsTechnicianIdDto>(this._API_UPDATE + '/' + id , ticket)
  }
}
