import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariables } from '../../global-variables';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  countMenus: number = 0;

  constructor() {

  }

  ngOnInit(): void {
    let numero = GlobalVariables.enabledMenus();
    this.countMenus = numero;
  }

}
