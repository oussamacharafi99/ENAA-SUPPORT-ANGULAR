import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {
  activeLink: string = '';

  constructor() { }

  ngOnInit(): void {
    this.activeLink = '/userDash';
  }

  setActive(link: string): void {
    this.activeLink = link;
  }


}
