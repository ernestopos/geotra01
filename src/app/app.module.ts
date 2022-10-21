import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesModule } from './pages/pages.module';
import { UsuariosComponent } from './app/pages/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,   
    NopagefoundComponent, UsuariosComponent      
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
