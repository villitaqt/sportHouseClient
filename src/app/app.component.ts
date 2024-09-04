import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private router: Router) {}
  title = 'gym-frontend';

  navigateToList(): void {
    this.router.navigate(['/']);
  }

  navigateToCreate(): void {
    this.router.navigate(['/crear']);
  }

  navigateToTipoLista(): void {
    this.router.navigate(['/crear-tipo-membresia']);
  }
}

