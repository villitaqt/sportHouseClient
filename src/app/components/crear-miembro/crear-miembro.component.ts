import { Component, OnInit } from '@angular/core';
import { MiembroService } from '../../services/miembro.service';
import { TipoMembresiaService } from '../../services/tipo-membresia.service'; // Importa el servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-miembro',
  templateUrl: './crear-miembro.component.html',
  styleUrls: ['./crear-miembro.component.css']
})
export class CrearMiembroComponent implements OnInit {
  miembro = {
    nombre: '',
    dni: '',
    membresia: {
      tipoMembresia: { id: 0 }  // Asegúrate de que sea un número
    }
  };
  
  tiposMembresia: any[] = []; // Inicializa como un arreglo vacío

  constructor(
    private miembroService: MiembroService,
    private tipoMembresiaService: TipoMembresiaService, // Inyecta el servicio
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarTiposMembresia();
  }

  cargarTiposMembresia(): void {
    this.tipoMembresiaService.getTiposMembresia().subscribe((data) => {
      this.tiposMembresia = data; // Carga los tipos de membresía desde la API
    });
  }

  onSubmit(): void {
    // Asegúrate de que el ID sea un número
    this.miembro.membresia.tipoMembresia.id = Number(this.miembro.membresia.tipoMembresia.id);
    this.miembroService.createMiembro(this.miembro).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}


