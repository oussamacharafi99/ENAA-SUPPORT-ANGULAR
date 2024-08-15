import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {
  [x: string]: any;
  activeLink: string = '';
  username : string = '';

  constructor() { }

  ngOnInit(): void {
    this.activeLink = '/userDash';
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
