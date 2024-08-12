import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Technician } from 'src/app/Models/technician';
import { AdmineServiceService } from 'src/app/Service/admine-service.service';
import { PersonServiceService } from 'src/app/Service/person-service.service';

@Component({
  selector: 'app-add-technician',
  templateUrl: './add-technician.component.html',
  styleUrls: ['./add-technician.component.css']
})
export class AddTechnicianComponent implements OnInit {
  formAddTechnician!: FormGroup;

  constructor(private service: PersonServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formAddTechnician = this.fb.group({
      id: [0], 
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      tickets: [[]],
    });
  }

  addTechnician(): void {
    if (this.formAddTechnician.valid) {
      const newTechnician: Technician = this.formAddTechnician.value;
      this.service.add_technician(newTechnician).subscribe((data: any) => {
        console.log('User added successfully:', data);
        this.formAddTechnician.reset();
      });
    }
    this.formAddTechnician = this.fb.group({
      id: [0], 
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      tickets: [[]],
    });
  }

}
