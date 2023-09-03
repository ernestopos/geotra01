import { Component, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { LoginForm } from 'src/app/interfaces/login-form.interfaces';
declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('googleBtn')
  private googleBtn!: ElementRef;

  public formSubmmitted = false;

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remenber: [false],
  });

  ngAfterViewInit(): void {
    this.usuarioService.googleInit(this.googleBtn);    
  }

  constructor(private router: Router, private fb: FormBuilder, private usuarioService: UsuarioService, private ngZone: NgZone) {
    this.formSubmmitted = false;
    this.loginForm.get('email')?.setValue(this.getEmailStorage());

    /*const data = `{
      "employee":{
        "name":"John",
        "age":"30",
        "salary":5000,
        "city":"New York",
        "skills" : ["JavaScripts","CSS","HTML"]
      }
    }`;

    console.log('typeof',typeof data);
    const parseData = JSON.parse(data);
    console.log('parseData',parseData);
    console.log('name',parseData.employee.name);
    
    for(var key in parseData.employee){
      console.log('key',key);
      console.log(key, parseData.employee[key]);
    }*/
  }

  getEmailStorage() {
    this.formSubmmitted = true;
    return localStorage.getItem('email') || '';
  }

  login() {

    this.formSubmmitted = true;

    if (!this.loginForm.valid) {
      return;
    }

    this.usuarioService.login(this.loginForm.value as LoginForm).subscribe(resp => {
      //console.log((resp as Response).token);
      //console.log((resp as Response).ok);
      if (this.loginForm.get('remenber')?.value) {
        localStorage.setItem('email', this.loginForm.get('email')?.value as string);
      } else {
        localStorage.removeItem('email');
      }
      Swal.fire({
        title: 'success',
        text: 'Logue correcto',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      this.router.navigateByUrl('/');
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error');
    });
    //this.router.navigateByUrl('/');
  }

  campoNoValido(campo: string): boolean {
    return (this.loginForm.get(campo)?.valid && this.formSubmmitted) ? true : false;
  }
}
