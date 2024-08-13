import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Panne } from 'src/app/Models/panne';
import { Material } from 'src/app/Models/material';
import { Ticket } from 'src/app/Models/ticket';
import { MaterialServiceService } from 'src/app/Service/material-service.service';
import { TicketServiceService } from 'src/app/Service/ticket-service.service';
import { JwtDto } from 'src/app/Models/Jwt';
import { PanneServiceService } from 'src/app/Service/panne-service.service';
import { MaterialEtat, TicketStatus } from 'src/app/Models/enum';

@Component({
  selector: 'app-add-user-ticket',
  templateUrl: './add-user-ticket.component.html',
  styleUrls: ['./add-user-ticket.component.css']
})
export class AddUserTicketComponent implements OnInit {

  formTickets!: FormGroup;
  ListMaterials: Material[] = [];
  ListPannes: Panne[] = [];
  id!: number;

  constructor(
    private materialService: MaterialServiceService,
    private fb: FormBuilder,
    private serviceP: PanneServiceService,
    private serviceT: TicketServiceService
  ) {}

  ngOnInit(): void {
    const storedJwtData = localStorage.getItem('jwtData');
    if (storedJwtData) {
      const jwtData: JwtDto = JSON.parse(storedJwtData);
      this.id = jwtData.person_id;
    }

    this.formTickets = this.fb.group({
      id: [0],
      description: ['', Validators.required],
      dateCreation: [],
      insert_date: [''],
      user: 0,
      material: ['', Validators.required],
      status: [TicketStatus.FAILURE],
      technicalDescription: [''],
      panne: ['', Validators.required],
      technician: [''],
    });

    this.materialService.getMaterials().subscribe((data: Material[]) => {
      this.ListMaterials = data.filter(material => material.user.id === this.id);
      console.log("--0--0---material---> " + data);
      console.log("--0--0---id---> " + this.id);
      
    });

    this.serviceP.get_pannes().subscribe((data: Panne[]) => {
      this.ListPannes = data;
      console.log("--0--0---pannes---> "  + data);
    });
  }

  addTicket(): void {
    if (this.formTickets.valid) {
      const newTicket: Ticket = {
        id: 0,
        description: this.formTickets.value.description,
        dateCreation: new Date().toISOString(),
        status: TicketStatus.FAILURE,
        technicalDescription: this.formTickets.value.technicalDescription,
        panne: {
          id: this.formTickets.value.panne,
          date: '',
          description: '',
          type: '',
          tickets: []
        },
        user: {
          id: this.id,
          tickets: [],
          materials: [],
          username: '',
          email: '',
          password: '',
          roles: []
        },
        technician:{
          tickets: [],
          id: 0,
          username: '',
          email: '',
          password: '',
          roles: []
        },
        material:{
          id:  this.formTickets.value.material,
          name: '',
          description: '',
          etat:MaterialEtat.OUT_SERVICE,
          insert_date: '',
          user:{
            tickets: [],
            materials: [],
            id: 0,
            username: '',
            email: '',
            password: '',
            roles: []
          },
          tickets: []
        }
      };

      this.serviceT.addTickets(newTicket).subscribe(data => {
        console.log('Ticket added:', data);
      });

      this.formTickets.reset({
        id: 0,
        description: '',
        dateCreation: '',
        insert_date: '',
        user: '',
        material: '',
        status: TicketStatus.FAILURE,
        technicalDescription: '',
        panne: null,
        technician: null
      });
    }
  }
}
