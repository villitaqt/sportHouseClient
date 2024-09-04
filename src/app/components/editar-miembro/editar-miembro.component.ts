import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MiembroService } from '../../services/miembro.service';
import { MembresiaService } from '../../services/membresia.service';
import { TipoMembresiaService } from 'src/app/services/tipo-membresia.service';

@Component({
  selector: 'app-editar-miembro',
  templateUrl: './editar-miembro.component.html',
  styleUrls: ['./editar-miembro.component.css']
})
export class EditarMiembroComponent implements OnInit {
  miembro: any = {
    nombre: '',
    dni: '',
    membresia: { tipoMembresia: { id: 0 } }
  };
  tiposMembresia: any[] = []; // Lista de tipos de membresía

  constructor(
    private miembroService: MiembroService,
    private membresiaService: MembresiaService,
    private tipoMembresiaService: TipoMembresiaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    // Obtener los detalles del miembro
    this.miembroService.getMiembroById(id).subscribe(data => {
      this.miembro = data;
      // Verifica que el ID de tipoMembresia se asigna correctamente
      console.log(this.miembro.membresia.tipoMembresia.id);
    });

    // Cargar los tipos de membresía desde el backend
    this.tipoMembresiaService.getTiposMembresia().subscribe(data => {
      this.tiposMembresia = data;
    });
  }

  onSubmit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
  
    // Solo enviar el nombre, DNI y tipo de membresía
    const miembroActualizado = {
      nombre: this.miembro.nombre,
      dni: this.miembro.dni,
      membresia: {
        tipoMembresia: {
          id: this.miembro.membresia.tipoMembresia.id
        }
      }
    };
  
    this.miembroService.updateMiembro(id, miembroActualizado).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
