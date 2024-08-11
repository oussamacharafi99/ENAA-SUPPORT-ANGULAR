import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TicketDto } from 'src/app/Models/dto/TicketDto';
import { TicketServiceService } from 'src/app/Service/ticket-service.service';

@Component({
  selector: 'app-tikckets-fialur',
  templateUrl: './tikckets-fialur.component.html',
  styleUrls: ['./tikckets-fialur.component.css'],
})
export class TikcketsFialurComponent implements OnInit {
  displayedColumns: string[] = [
    'userName',
    'description',
    'dateCreation',
    'status',
    'materialName',
    'panneType',
    'update'
  ];
  dataSource: MatTableDataSource<TicketDto>;

  constructor(private service: TicketServiceService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.service.getAllTicketsFailur().subscribe((data: TicketDto[]) => {
      this.dataSource.data = data;
      console.log(data);
    });
  }
}
