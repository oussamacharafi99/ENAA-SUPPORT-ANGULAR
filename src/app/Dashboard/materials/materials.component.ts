import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/Models/material';
import { MaterialServiceService } from 'src/app/Service/material-service.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'etat', 'insert_date', 'user', 'delete'];
  dataSource: Material[] = [];

  constructor(private materialService: MaterialServiceService) { }

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
      this.dataSource = this.dataSource.filter(material => material.id !== id);
      console.log(`Material with ID ${id} has been deleted`);

    }, error => {
      console.error("Erreur lors de la suppression de la material", error);
    });

    this.loadMaterials();
  }

}
