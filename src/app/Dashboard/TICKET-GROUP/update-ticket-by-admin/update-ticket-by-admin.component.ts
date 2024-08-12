import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDto } from 'src/app/Models/dto/TicketDto';
import { TicketsTechnicianIdDto } from 'src/app/Models/dto/TicketsTechnicianIdDto';
import { Person } from 'src/app/Models/person';
import { PersonServiceService } from 'src/app/Service/person-service.service';
import { TicketServiceService } from 'src/app/Service/ticket-service.service';

@Component({
  selector: 'app-update-ticket-by-admin',
  templateUrl: './update-ticket-by-admin.component.html',
  styleUrls: ['./update-ticket-by-admin.component.css']
})
export class UpdateTicketByAdminComponent implements OnInit {

  ListUsers!: Person[];
  formUpdate!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder, 
    private service: TicketServiceService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private personService: PersonServiceService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
    });

    this.personService.getTichnicians().subscribe((data: Person[]) => {
      this.ListUsers = data;
    });

    this.initForm();
  }

  updateTicket(): void {
    if (this.formUpdate.valid) {
      const updatedTicket : TicketsTechnicianIdDto = {
        ticketsTechnicianId: this.formUpdate.value.idTechnician,
      };
      this.service.updateTicketsByAdmin(this.id, updatedTicket).subscribe();
    }
    this.router.navigate(['/dashboard/tickets']);
    this.initForm();
  }
  

  initForm(): void {
    this.formUpdate = this.fb.group({
      idTechnician: ['', Validators.required],
    });
  }

}


