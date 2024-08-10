import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialEtat } from 'src/app/Models/enum';
import { Material } from 'src/app/Models/material';
import { MaterialServiceService } from 'src/app/Service/material-service.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css'],
})
export class MaterialsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'etat',
    'insert_date',
    'user',
    'delete',
    'update',
  ];
  dataSource: Material[] = [];
  formUpdate!: FormGroup;
  idM!: number;

  constructor(
    private materialService: MaterialServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadMaterials();
    this.formUpdate = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      user: ['', Validators.required],
    });
  }

  loadMaterials(): void {
    this.materialService.getMaterials().subscribe((data: Material[]) => {
      this.dataSource = data;
      console.log(data);
    });
  }

  removeM(id: number): void {
    this.materialService.removeMaterials(id).subscribe(() => {
      this.dataSource = this.dataSource.filter(
        (material) => material.id !== id
      );
      console.log(`Material has been deleted`);
    });
    this.loadMaterials();
  }

  getAndReturnIdMaterials(idM: number): void {
    this.idM = idM;
    const material = this.dataSource.find((materiale) => materiale.id === idM);
    if (material) {
      this.formUpdate.patchValue({
        id: material.id,
        name: material.name,
        description: material.description,
        user: {
          id: material.user.id,
        },
        tickets: [],
        pannes: [],
      });
    } else {
      console.error(`Material not found`);
    }
  }

  updateMaterials(): void {
    if (this.formUpdate.valid) {
      const updatedMaterial = {
        id: this.idM,
        ...this.formUpdate.value,
      };

      this.materialService.updateMaterials(updatedMaterial).subscribe(() => {
        console.log(`Material has been updated`);
      });
    } else {
      console.error('Form is not valid');
    }
    this.loadMaterials();
  }
}
