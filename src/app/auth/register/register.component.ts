import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmmitted = false;

  public registerForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    terminos: [false],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

  constructor(private router: Router,private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.formSubmmitted = false;
  }

  crearUsuario() {
    //console.log(this.registerForm);
    this.formSubmmitted = true;

    if (!this.registerForm.valid) {
      return;
    }

    // Realizar el posteo
    this.usuarioService.crearUsuario(this.registerForm.value).subscribe(resp => {
      Swal.fire({
        title: 'success',
        text: 'Usuario creado correctamente',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      this.router.navigateByUrl('/');
    }, (err) => {
      // Si sucede un error:
      Swal.fire('Error', err.error.msg, 'error');
    });

  }

  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;
    return pass1 === pass2 && this.formSubmmitted ? true : false;
  }

  passwordsIguales(passName1: string, passName2: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(passName1);
      const pass2Control = formGroup.get(passName2);
      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ noEsigual: true });
      }
    }
  }

  aceptaTerminos() {
    return (!this.registerForm.get('terminos')?.value && this.formSubmmitted ? true : false);
  }

  password2Validation(): boolean {
    /*const controlErrors: ValidationErrors = this.registerForm.get('password2')?.errors as ValidationErrors;
    if (controlErrors) {
      Object.keys(controlErrors).forEach(keyError => {
        console.log('keyError: ' , keyError);
        console.log('value: ' , controlErrors[keyError]);        
      });
    }*/
    return (this.registerForm.get('password2')?.value === '' ? true : false);
  }

  campoNoValido(campo: string): boolean {
    return (this.registerForm.get(campo)?.valid && this.formSubmmitted) ? true : false;
  }

}
