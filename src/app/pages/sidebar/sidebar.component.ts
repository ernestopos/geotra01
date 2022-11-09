import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  countMenus: number = 0;

  constructor(private usuario: UsuariosService) {
  }

  ngOnInit(): void {
    let numero = this.usuario.enabledMenus();
    this.usuario.apiConsumer();
    this.countMenus = numero;
    console.log("Estos son los items cargados desde sidebar " + this.countMenus );
  }

}
