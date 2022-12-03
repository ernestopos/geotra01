import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})

export class BreadcrumbsComponent {
  
  public titulo: string = '';
  
  constructor(private router: Router) {
    this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ? event.snapshot.firstChild === null : false ),
      map( event => event instanceof ActivationEnd ? event.snapshot.data  : event ))
      .subscribe( data  => {
        this.titulo = data["titulo"];
      });
  }
}