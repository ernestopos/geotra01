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

const routes: Routes = [
  {
    path: 'dashboard', 
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'cargarinsumopcb', component: CargarinsumopcbComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'equipos', component: EquiposComponent },
      { path: 'generarreportepcb', component: GenerarreportepcbComponent },
      { path: 'parametros', component: ParametrosComponent },
      { path: 'rolesusuarios', component: RolesusuariosComponent },
      { path: 'solicitudespcb', component: SolicitudespcbComponent },
      { path: 'usuarios', component: UsuariosComponent },
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
