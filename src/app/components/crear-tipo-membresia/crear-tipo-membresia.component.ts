import { Component, OnInit } from '@angular/core';
import { TipoMembresiaService } from '../../services/tipo-membresia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-tipo-membresia',
  templateUrl: './crear-tipo-membresia.component.html',
  styleUrls: ['./crear-tipo-membresia.component.css']
})
export class CrearTipoMembresiaComponent implements OnInit {

  tipoMembresia = {
    nombre: '',
    precio: 0,
    mes: 0
  };

  constructor(private tipoMembresiaService: TipoMembresiaService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.tipoMembresiaService.createTipoMembresia(this.tipoMembresia).subscribe(() => {
      this.router.navigate(['/']); // Redirige a donde quieras después de la creación
    });
  }
}
