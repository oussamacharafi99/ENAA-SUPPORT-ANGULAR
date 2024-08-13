import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtDto } from 'src/app/Models/Jwt';
import { TicketsTechnicalDescriptionDto } from 'src/app/Models/dto/TicketsTechnicalDescriptionDto';
import { TicketServiceService } from 'src/app/Service/ticket-service.service';

@Component({
  selector: 'app-update-tickets-technician',
  templateUrl: './update-tickets-technician.component.html',
  styleUrls: ['./update-tickets-technician.component.css']
})
export class UpdateTicketsTechnicianComponent implements OnInit {

  formUpdate!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder, 
    private service: TicketServiceService, 
    private route: ActivatedRoute, 
    private router: Router, 
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
    });

    console.log("====" + this.id);
    
    this.initForm();
  }

  updateTicket(): void {
    if (this.formUpdate.valid) {
      const updatedTicket : TicketsTechnicalDescriptionDto = {
        technicalDescription: this.formUpdate.value.technicalDescription,
      };

      console.log('ti ' + this.formUpdate.value.technicalDescription);
      
      this.service.updateTicketsByTechnician(this.id, updatedTicket).subscribe();
    }
    this.router.navigate(['/technicianDash']);
    this.initForm();
  }
  

  initForm(): void {
    this.formUpdate = this.fb.group({
      technicalDescription: ['', Validators.required],
    });
  }
}
