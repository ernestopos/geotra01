import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  countMenus: number = 0;

  constructor() {}

  public setCountNumbers(calculate: number): void {
    localStorage.removeItem('GlobalVariables.countMenus');
    localStorage.setItem('GlobalVariables.countMenus', calculate.toString());
    this.countMenus = calculate;
    console.log(this.countMenus);
  }

  public enabledMenus(): number {
    let globalCount = localStorage.getItem('GlobalVariables.countMenus');
    this.countMenus =
      typeof globalCount === 'string' ? parseInt(globalCount) : 0;
    console.log(this.countMenus);
    return this.countMenus;
  }

  public apiConsumer(): void {
    const promesa = new Promise((resolve, reject) => {
      if (false) {
        resolve('Hola Mundo');
      } else {
        reject('Algo salió mal');
      }
    });

    promesa
      .then((mensaje) => {
        console.log(mensaje);
      })
      .catch((error) => {
        console.log('Error en la promesa', error);
      });

     console.log('Fin del proceso'); 
  }
}
