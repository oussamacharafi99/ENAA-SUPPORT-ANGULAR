import { Component, OnInit} from '@angular/core';
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
    this.materialService.getMaterials().subscribe((data: Material[]) => {
      this.dataSource = data;
      console.log(data);
    }, error => {
      console.error("Error fetching materials", error);
    });
  }

  // deleteMaterial(id: number): void {
  //   this.materialService.deleteMaterialById(id).subscribe(() => {
  //     this.dataSource = this.dataSource.filter(material => material.id !== id);
  //     console.log(`Material with ID ${id} has been deleted`);
  //   }, error => {
  //     console.error("Error deleting material", error);
  //   });
  // }
}
