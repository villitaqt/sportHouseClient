import { Component, OnInit } from '@angular/core';
import { MiembroService } from '../../services/miembro.service';
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
  
  tiposMembresia = [
    { id: 1, nombre: '1 Mes - 100 Soles' },
    { id: 2, nombre: '3 Meses - 250 Soles' },
    { id: 4, nombre: '6 Meses - 420 Soles' }
    // Agrega más tipos de membresía aquí
  ];

  constructor(private miembroService: MiembroService, private router: Router) { }

  ngOnInit(): void {
    // Puedes cargar tipos de membresía desde el backend si es necesario
  }

  onSubmit(): void {
    // Asegúrate de que el ID sea un número
    this.miembro.membresia.tipoMembresia.id = Number(this.miembro.membresia.tipoMembresia.id);
    this.miembroService.createMiembro(this.miembro).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}

