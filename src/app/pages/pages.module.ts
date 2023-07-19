import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficalComponent } from './grafical/grafical.component';
import { ProgressComponent } from './progress/progress.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { RolesusuariosComponent } from './rolesusuarios/rolesusuarios.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { SolicitudespcbComponent } from './solicitudespcb/solicitudespcb.component';
import { CargarinsumopcbComponent } from './cargarinsumopcb/cargarinsumopcb.component';
import { GenerarreportepcbComponent } from './generarreportepcb/generarreportepcb.component';
import { RxjsComponent } from './rjxs/rjxs.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficalComponent,
    PagesComponent,
    AccountSettingsComponent,
    UsuariosComponent,
    ParametrosComponent,
    RolesusuariosComponent,
    EquiposComponent,
    ClientesComponent,
    SolicitudespcbComponent,
    CargarinsumopcbComponent,
    GenerarreportepcbComponent,
    RxjsComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraficalComponent,
    PagesComponent,
    AppRoutingModule,
    AccountSettingsComponent,
    UsuariosComponent,
    ParametrosComponent,
    RolesusuariosComponent,
    EquiposComponent,
    ClientesComponent,
    SolicitudespcbComponent,
    CargarinsumopcbComponent,
    GenerarreportepcbComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class PagesModule implements OnInit {
  //

  ngOnInit(): void {    
  }

}
