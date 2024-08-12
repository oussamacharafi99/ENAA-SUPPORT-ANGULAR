import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TicketDto } from 'src/app/Models/dto/TicketDto';
import { TicketServiceService } from 'src/app/Service/ticket-service.service';

@Component({
  selector: 'app-tikckets-processing',
  templateUrl: './tikckets-processing.component.html',
  styleUrls: ['./tikckets-processing.component.css']
})
export class TikcketsProcessingComponent implements OnInit {

  
  displayedColumns: string[] = ['userName', 'description', 'dateCreation', 'status', 'technicalName', 'materialName', 'panneType'];
  dataSource: MatTableDataSource<TicketDto>;

  constructor(private service: TicketServiceService) {
    this.dataSource = new MatTableDataSource();  
  }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.service.getAllTicketsProcessing().subscribe((data: TicketDto[]) => {
      this.dataSource.data = data;  
      console.log(data);
    });
  }


}
