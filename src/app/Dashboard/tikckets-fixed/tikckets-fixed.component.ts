import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TicketDto } from 'src/app/Models/dto/TicketDto';
import { TicketServiceService } from 'src/app/Service/ticket-service.service';

@Component({
  selector: 'app-tikckets-fixed',
  templateUrl: './tikckets-fixed.component.html',
  styleUrls: ['./tikckets-fixed.component.css']
})
export class TikcketsFixedComponent implements OnInit {

  displayedColumns: string[] = ['userName', 'description', 'dateCreation', 'status', 'technicalName', 'technicalDescription', 'materialName', 'panneType'];
  dataSource: MatTableDataSource<TicketDto>;

  constructor(private service: TicketServiceService) {
    this.dataSource = new MatTableDataSource();  
  }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.service.getAllTicketsFixed().subscribe((data: TicketDto[]) => {
      this.dataSource.data = data;  
      console.log(data);
    });
  }

}
