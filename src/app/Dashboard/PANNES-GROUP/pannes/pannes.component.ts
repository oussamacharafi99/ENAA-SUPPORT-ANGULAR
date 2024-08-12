import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Panne } from 'src/app/Models/panne';
import { PanneServiceService } from 'src/app/Service/panne-service.service';

@Component({
  selector: 'app-pannes',
  templateUrl: './pannes.component.html',
  styleUrls: ['./pannes.component.css']
})
export class PannesComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'date',
    'description',
    'type',
  ];
  dataSource: MatTableDataSource<Panne>;

  constructor(private service: PanneServiceService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.service.get_pannes().subscribe((data: Panne[]) => {
      this.dataSource.data = data;
      console.log(data);
    });
  }
}
