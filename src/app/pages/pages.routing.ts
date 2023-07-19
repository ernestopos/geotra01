import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { CargarinsumopcbComponent } from './cargarinsumopcb/cargarinsumopcb.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EquiposComponent } from './equipos/equipos.component'
import { GenerarreportepcbComponent } from './generarreportepcb/generarreportepcb.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { RolesusuariosComponent } from './rolesusuarios/rolesusuarios.component';
import { SolicitudespcbComponent } from './solicitudespcb/solicitudespcb.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RxjsComponent } from './rjxs/rjxs.component';

const routes: Routes = [
  {
    path: 'dashboard', 
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data : { titulo : 'dashboard' } },
      { path: 'cargarinsumopcb', component: CargarinsumopcbComponent, data : { titulo : 'cargarinsumopcb' } },
      { path: 'clientes', component: ClientesComponent, data : { titulo : 'clientes' } },
      { path: 'equipos', component: EquiposComponent, data : { titulo : 'equipos' }},
      { path: 'generarreportepcb', component: GenerarreportepcbComponent, data : { titulo : 'generarreportepcb' }},
      { path: 'parametros', component: ParametrosComponent, data : { titulo : 'parametros' }},
      { path: 'rolesusuarios', component: RolesusuariosComponent, data : { titulo : 'rolesusuarios' }},
      { path: 'solicitudespcb', component: SolicitudespcbComponent, data : { titulo : 'solicitudespcb' }},
      { path: 'usuarios', component: UsuariosComponent, data : { titulo : 'usuarios' }},
      { path: 'rxjs', component: RxjsComponent, data : { titulo : 'rxjs' }}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
