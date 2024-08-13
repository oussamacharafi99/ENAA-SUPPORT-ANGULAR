import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { JwtDto } from 'src/app/Models/Jwt';
import { TicketDto } from 'src/app/Models/dto/TicketDto';
import { TicketServiceService } from 'src/app/Service/ticket-service.service';

@Component({
  selector: 'app-user-ticket',
  templateUrl: './user-ticket.component.html',
  styleUrls: ['./user-ticket.component.css']
})
export class UserTicketComponent implements OnInit {

  displayedColumns: string[] = ['userName', 'description', 'dateCreation', 'status', 'technicalName', 'materialName', 'panneType'];
  dataSource: MatTableDataSource<TicketDto>;
  id!:number;

  constructor(private service: TicketServiceService) {
    this.dataSource = new MatTableDataSource();  
  }

  ngOnInit(): void {
    const storedJwtData = localStorage.getItem('jwtData');
        if (storedJwtData) {
            const jwtData: JwtDto = JSON.parse(storedJwtData);
            const person_id = jwtData.person_id;
            this.id = person_id;
    }
    this.loadTickets();
  }

  loadTickets(): void {
    this.service.getTicketByUderId(this.id).subscribe((data: TicketDto[]) => {
      this.dataSource.data = data;  
      console.log(data);
    });
  }


}
