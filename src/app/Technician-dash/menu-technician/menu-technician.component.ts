import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-menu-technician',
  templateUrl: './menu-technician.component.html',
  styleUrls: ['./menu-technician.component.css']
})
export class MenuTechnicianComponent implements OnInit {

  activeLink: string = '';
  username : string = '';

  constructor() { }

  ngOnInit(): void {
    this.activeLink = '/technicianDash';
    this.loadUserName();
  }

  setActive(link: string): void {
    this.activeLink = link;
  }

  loadUserName(): void {
    const jwtData = localStorage.getItem('jwtData');
    if (jwtData) {
      const jwtToken = JSON.parse(jwtData).token;
      const decodedToken: any = jwtDecode(jwtToken);
  
      this.username = `${decodedToken.sub}`;
    } else {
      console.log('JWT not found!');
    }
  }

}
