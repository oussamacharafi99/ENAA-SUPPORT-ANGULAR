import { Component, OnInit } from '@angular/core';
import { MaterialServiceService } from 'src/app/Service/material-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private material : MaterialServiceService) { }

  ngOnInit(): void {

  }

}
