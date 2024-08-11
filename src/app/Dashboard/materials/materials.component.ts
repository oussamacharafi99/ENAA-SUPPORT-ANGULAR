import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  idM!: number;

  constructor(
    private materialService: MaterialServiceService,
  ) {}

  ngOnInit(): void {
    this.loadMaterials();
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

}
