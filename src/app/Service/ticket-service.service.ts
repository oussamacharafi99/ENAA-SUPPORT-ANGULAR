import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketDto } from '../Models/dto/TicketDto';
import { Ticket } from '../Models/ticket';
import { TicketsTechnicianIdDto } from '../Models/dto/TicketsTechnicianIdDto';
import { TicketsTechnicalDescriptionDto } from '../Models/dto/TicketsTechnicalDescriptionDto';

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
  _API_UPDATE_BY_TECHNICIAN = "http://localhost:9999/api/ticket/update_by_technician"
  _API_GET_TICKETS_BY_USER_ID = "http://localhost:9999/api/ticket/get_user_tickets"
  _API_ADD_TICKETS_BY_USER = "http://localhost:9999/api/ticket/add"
  _API_GET_FIXED_BY_TECHNICIAN = "http://localhost:9999/api/ticket/get_tickets_fixed"
  _API_GET_PROCESSING_BY_TECHNICIAN = "http://localhost:9999/api/ticket/get_tickets_processing"

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

  getTicketByUderId(id : number):Observable<TicketDto[]>{
    return this.http.get<TicketDto[]>(this._API_GET_TICKETS_BY_USER_ID + '/' + id);
  }
  addTickets(ticket : Ticket):Observable<Ticket>{
      return this.http.post<Ticket>(this._API_ADD_TICKETS_BY_USER , ticket);
  }

  getAllTicketsFixedByTechnician(id :number):Observable<TicketDto[]>{
    return this.http.get<TicketDto[]>(this._API_GET_FIXED_BY_TECHNICIAN + '/' + id)
   }
  
  getAllTicketsProcessingByTechnician(id : number):Observable<TicketDto[]>{
    return this.http.get<TicketDto[]>(this._API_GET_PROCESSING_BY_TECHNICIAN + '/' + id)
   }

   updateTicketsByTechnician(id : number, ticket : TicketsTechnicalDescriptionDto ):Observable<TicketsTechnicalDescriptionDto>{
    return this.http.put<TicketsTechnicalDescriptionDto>(this._API_UPDATE_BY_TECHNICIAN + '/' + id , ticket)
}
}
