import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonDto } from 'src/app/Models/dto/PersonDto';
import { MaterialEtat } from 'src/app/Models/enum';
import { Material } from 'src/app/Models/material';
import { MaterialServiceService } from 'src/app/Service/material-service.service';
import { PersonServiceService } from 'src/app/Service/person-service.service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css'],
})
export class AddMaterialComponent implements OnInit {
  formMaterials!: FormGroup;
  ListUsers: PersonDto[] = [];

  constructor(
    private materialService: MaterialServiceService,
    private fb: FormBuilder,
    private personService: PersonServiceService
  ) {}

  ngOnInit(): void {
    this.formMaterials = this.fb.group({
      id: 0,
      name: ['', Validators.required],
      description: ['', Validators.required],
      insert_date: [''],
      user: ['', Validators.required], // Added user control
      tickets: [[]],
    });

    this.personService.get_persons().subscribe((data: any) => {
      this.ListUsers = data;
    });
  }

  addMaterials() {
    if (this.formMaterials.valid) {
      const newMaterial: Material = {
        id: 0,
        name: this.formMaterials.value.name,
        description: this.formMaterials.value.description,
        etat: MaterialEtat.NEW,
        insert_date: this.formMaterials.value.insert_date,
        user: {
          id: this.formMaterials.value.user,
          tickets: [],
          materials: [],
          username: '', // The username will be populated based on the user selection
          email: '',
          password: '',
          roles: []
        },
        tickets: [],
      };

      this.materialService.addMaterials(newMaterial).subscribe(data => {
        console.log(data);
      });

      // Reset form after submission
      this.formMaterials.reset();
    }
  }
}
