import { Component, OnInit } from '@angular/core';
import { ApiRestConnectService } from 'src/app/services/api-rest-connect.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  countMenus: number = 0;

  constructor(
    private usuario: UsuariosService,
    private apirestconnecservice: ApiRestConnectService
  ) {}

  ngOnInit(): void {
    let numero = this.usuario.enabledMenus();    
    this.countMenus = numero;
    /*
    this.usuario.apiConsumer();
    this.apirestconnecservice.getUsuario().then((respuesta) => {
      console.log(respuesta);
    });
    this.prueba();*/
  }

  public prueba(): void {
    /*var url = window.location;
    console.log("esta es la url: " + url);*/
  }
}
