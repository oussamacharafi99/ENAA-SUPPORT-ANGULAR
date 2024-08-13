import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-technician',
  templateUrl: './menu-technician.component.html',
  styleUrls: ['./menu-technician.component.css']
})
export class MenuTechnicianComponent implements OnInit {

  activeLink: string = '';

  constructor() { }

  ngOnInit(): void {
    this.activeLink = '/technicianDash';
  }

  setActive(link: string): void {
    this.activeLink = link;
  }


}
