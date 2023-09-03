import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable, NgZone, ElementRef } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interfaces';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interfaces/login-form.interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { Response } from 'src/app/interfaces/response.terfaces';
import { Observable, of } from 'rxjs';

const base_url = environment.base_url;
declare const google: any;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;

  constructor(private http: HttpClient, private router: Router, private ngZone: NgZone) {
    //this.googleInicio();
  }

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData);
  }

  googleInit(googleBtn: ElementRef) {
    google.accounts.id.initialize({
      client_id: "1081242929823-q05rlg4m97gdhpsbevsnhso08ud3teqi.apps.googleusercontent.com",
      callback: (response: any) => this.handleCredentialResponse(response)
    });
    google.accounts.id.renderButton(
      googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );
    //google.accounts.id.prompt(); // also display the One Tap dialog
  }

  handleCredentialResponse(response: any) {
    this.loginGoogle(response.credential).subscribe(resp => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/');
      });
    });
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    return this.http.get(`${base_url}/login/renew`,
      {
        headers: {
          'x-token': token
        }
      }).pipe(
        tap((resp) => {
          localStorage.setItem('token', (resp as Response).token);
        }),
        map(resp => true),
        catchError(error => of(false))
      );
  }

  // Reivsar este código para actualizarlo con las úlimas versiones de google.
  /*googleInit() {
    window.onload
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init(
        {
          client_id: "1081242929823-q05rlg4m97gdhpsbevsnhso08ud3teqi.apps.googleusercontent.com",
          cookiepolicy: 'single_host_origin'
        }
      );
    });
  }*/

  logout() {
    localStorage.removeItem('token');
    google.accounts.id.revoke('ernestopos@gmail.com', () => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      })
    });
    /*this.auth2.signOut().then(()=>{
      this.router.navigateByUrl('/login');
    });*/
  }

  login(formData: LoginForm) {
    console.log('formData', formData);
    return this.http.post(`${base_url}/login`, formData)
      .pipe(
        tap((resp) => {
          localStorage.setItem('token', (resp as Response).token);
        })
      );
  }

  loginGoogle(token: string) {
    return this.http.post(`${base_url}/login/google`, { token })
      .pipe(
        tap((resp) => {
          localStorage.setItem('token', (resp as Response).token);
        })
      );
  }

}

