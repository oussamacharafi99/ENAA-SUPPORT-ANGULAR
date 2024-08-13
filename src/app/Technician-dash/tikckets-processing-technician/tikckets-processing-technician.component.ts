import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { JwtDto } from 'src/app/Models/Jwt';
import { TicketDto } from 'src/app/Models/dto/TicketDto';
import { PersonServiceService } from 'src/app/Service/person-service.service';
import { TicketServiceService } from 'src/app/Service/ticket-service.service';

@Component({
  selector: 'app-tikckets-processing-technician',
  templateUrl: './tikckets-processing-technician.component.html',
  styleUrls: ['./tikckets-processing-technician.component.css']
})
export class TikcketsProcessingTechnicianComponent implements OnInit {

  displayedColumns: string[] = ['userName', 'description', 'dateCreation', 'status','materialName', 'panneType', 'update'];
  dataSource: MatTableDataSource<TicketDto>;
  technicianName!:string;

  constructor(private service: TicketServiceService , private serviceP : PersonServiceService) {
    this.dataSource = new MatTableDataSource();  
  }

  ngOnInit(): void {
    const storedJwtData = localStorage.getItem('jwtData');
    if (storedJwtData) {
        const jwtData: JwtDto = JSON.parse(storedJwtData);
        const person_id = jwtData.person_id;
        this.loadTickets(person_id);
    }
    
  }

  loadTickets(_id : number): void {
    this.service.getAllTicketsProcessingByTechnician(_id).subscribe((data: TicketDto[]) => {          
        this.dataSource.data = data;
    });
  }
}
