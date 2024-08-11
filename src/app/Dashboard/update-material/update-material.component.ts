import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialEtat } from 'src/app/Models/enum';
import { Material } from 'src/app/Models/material';
import { MaterialServiceService } from 'src/app/Service/material-service.service';

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.component.html',
  styleUrls: ['./update-material.component.css']
})
export class UpdateMaterialComponent implements OnInit {
  formUpdate!: FormGroup;
  newMaterial!: Material;
  id!: number;

  constructor(private fb: FormBuilder, private service: MaterialServiceService, private routerA: ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.cleaning();

    this.routerA.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam; 
        this.service.getMaterialById(this.id).subscribe(material => {
          if (material) {
            this.formUpdate.patchValue({
              name: material.name,
              description: material.description,
              user:{
                id:material.user.id 
              } 
            });
            this.newMaterial = material;
          }
        });
      }
    });
  }

  cleaning(): void {
    this.formUpdate = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      user: ['', Validators.required],
    })
  }

  updateMaterials(): void {
    if (this.formUpdate.valid) {
      const updatedMaterial: Material = {
        ...this.newMaterial,
        ...this.formUpdate.value,
        etat: MaterialEtat.NEW_UPDATED,
        insert_date: new Date().toISOString()
      };
      this.service.updateMaterials(this.id, updatedMaterial).subscribe();
    } else {
      console.error('Form is not valid');
    }
    this.router.navigate(['/dashboard']);
    this.cleaning();
  }
  

}
