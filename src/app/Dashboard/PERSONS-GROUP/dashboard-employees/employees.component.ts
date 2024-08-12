import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/Models/person';
import { PersonServiceService } from 'src/app/Service/person-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'email', 'roles'];
  dataSource: MatTableDataSource<Person>;

  constructor(private service: PersonServiceService) {
    this.dataSource = new MatTableDataSource();  
  }

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    this.service.getPersonsWithoutAdmin().subscribe((data: Person[]) => {
      this.dataSource.data = data;  
      console.log(data);
    });
  }

}
