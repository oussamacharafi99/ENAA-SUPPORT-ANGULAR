import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TicketDto } from 'src/app/Models/dto/TicketDto';
import { Historic } from 'src/app/Models/historic';
import { HistoricService } from 'src/app/Service/historic.service';
import { MaterialServiceService } from 'src/app/Service/material-service.service';
import { TicketServiceService } from 'src/app/Service/ticket-service.service';

@Component({
  selector: 'app-rapport-table',
  templateUrl: './rapport-table.component.html',
  styleUrls: ['./rapport-table.component.css']
})
export class RapportTableComponent implements OnInit {

  displayedColumns: string[] = ['materialName', 'panneType', 'startDate', 'endDate', 'description','download'];
  dataSource: MatTableDataSource<Historic>;

  constructor(private service : HistoricService) {
    this.dataSource = new MatTableDataSource();  
  }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.service.getHistoric().subscribe((data: Historic[]) => {
      this.dataSource.data = data;  
      console.log(data);
    });
  }

  downloading(id : number){
      this.service.getRapport(id).subscribe(rp => {
        console.log(rp);
      })
  }

}
