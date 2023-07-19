import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rjxs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  //public intervalSubs: Subscription;
  //public apiSubcription: Subscription;
  public apiURL: string = 'https://reqres.in/api/users?page=2';

  constructor() {

    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor => console.log('Subs:', valor ),
    //   error => console.warn('Error:', error ),
    //   () => console.info('Obs terminado')
    // );
    //this.intervalSubs = this.retornaIntervalo().subscribe(console.log)
    /*this.apiSubcription = this.getAPIValue().subscribe(response => {
      console.log('Datos retornados por el API rest: ', response);
    });*/
    this.setInitialValues();
  }

  ngOnDestroy(): void {
    //this.apiSubcription.unsubscribe();
  }

  async setInitialValues() {
    let datos: Usuario[] = await this.getRawValue();
    datos.forEach(user => {
      console.log('id: ', user.id);
      console.log('first_name: ', user.first_name);
      console.log('last_name: ', user.last_name);
      console.log('email: ', user.email);
      console.log('avatar: ', user.avatar);
    });

  }

  retornaIntervalo(): Observable<number> {

    return interval(100)
      .pipe(
        // take(10),
        map(valor => valor + 1), // 0 => 1
        filter(valor => (valor % 2 === 0) ? true : false),
      );
  }

  getAPIValue(): Observable<[]> {
    return new Observable<[]>(observer => {
      fetch(this.apiURL,
        {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        })
        .then(resp => resp.json())
        .then(body => {
          body.data.map();
          observer.next(body.data);
          if (body.data != null) {
            observer.complete();
          }
          else {
            observer.error('No se puedo obtener los valores retornados por la API');
          }
        });
    });
  }

  async getRawValue(): Promise<Usuario[]> {
    var myHeaders = new Headers();
    myHeaders.append("User-Agent", "PostmanRuntime/7.29.2");

    let response = fetch(this.apiURL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(resp => {
        if (resp.status === 200) {
          return resp.json();
        } else {
          return null;
        }
      })
      .then(result => {
        return result.data.map((usr: any) => this.formatUsuario(usr));
      })
      .catch(error => console.log('error', error));
    return await response;
  }

  formatUsuario(dato: any): Usuario {
    return { id: dato.id, 
             email: dato.email, 
             first_name: dato.first_name, 
             last_name: dato.last_name, 
             avatar: dato.avatar };
  }



  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>(observer => {

      const intervalo = setInterval(() => {

        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego al valor de 2');
        }

      }, 1000)

    });

  }

}

