import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from '../global-variables';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setCountNumbers();
  }

  setCountNumbers(): void {
    GlobalVariables.setCountNumbers(200);
  }

}
