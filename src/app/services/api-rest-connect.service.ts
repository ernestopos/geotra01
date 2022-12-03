import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiRestConnectService {
  private url: string = 'https://reqres.in/api/users?page=2';

  constructor() {
    /*const obs$ = new Observable((observer) => {
      let i = 0;
      const invervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i == 20) {
          clearInterval(invervalo);
          observer.complete();
        }
      }, 1000);
    });
    obs$.subscribe((valor) => console.log('Subs:', valor));*/
  }

  getUsuario() {
    const promesa = new Promise((resolve) => {
      fetch(this.url)
        .then((resp) => resp.json())
        .then((body) => {
          resolve(body.data);
        });
    });
    return promesa;
  }
}
