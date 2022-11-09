import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

//declare function preloadFunction(): any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  
  constructor(private usuario: UsuariosService) {}

  ngOnInit(): void {    
    this.usuario.setCountNumbers(200);
    console.log("ngOnInit Pages Component" + this.usuario.enabledMenus());
    //preloadFunction();
  }
}
