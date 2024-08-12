import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TicketDto } from 'src/app/Models/dto/TicketDto';
import { TicketServiceService } from 'src/app/Service/ticket-service.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  ngOnInit(): void {
  }

}
