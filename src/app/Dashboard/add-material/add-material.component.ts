import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { MaterialEtat } from 'src/app/Models/enum';
import { Material } from 'src/app/Models/material';
import { MaterialServiceService } from 'src/app/Service/material-service.service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {
  formMaterials !: FormGroup;

  constructor(private materialService : MaterialServiceService , private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.formMaterials = this.fb.group({
      id: 0, 
      name: ['', Validators.required], 
      description: ['', Validators.required],
      insert_date: [''], 
      tickets: [[]]
    });
  }

  addMaterials(){
    if(this.formMaterials.valid){
      const newMaterial : Material = {
        id: 0,
        name: this.formMaterials.value.name,
        description: this.formMaterials.value.description,
        etat: MaterialEtat.NEW,
        insert_date: this.formMaterials.value.insert_date,
        user: {
          id: 2,
          tickets: [],
          materials: [],
          username: '',
          email: '',
          password: '',
          roles: []
        },
        tickets: [],
      };
      
      this.materialService.addMaterials(newMaterial).subscribe(data => {
        console.log(data);
      });
    }

    this.formMaterials = this.fb.group({
      id: 0, 
      name: ['', Validators.required], 
      description: ['', Validators.required],
      insert_date: [''], 
      tickets: [[]]
    });

  }

}
