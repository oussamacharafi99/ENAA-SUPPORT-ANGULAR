import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  activeLink: string = '';

  constructor() { }

  ngOnInit(): void {
    this.activeLink = '/dashboard';
  }

  setActive(link: string): void {
    this.activeLink = link;
  }

}
