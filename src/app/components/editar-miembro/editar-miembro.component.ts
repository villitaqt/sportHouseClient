import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MiembroService } from '../../services/miembro.service';
import { MembresiaService } from '../../services/membresia.service'; // Asegúrate de importar el servicio de membresía

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
  tiposMembresia = [
    { id: 1, nombre: '1 Mes - 100 Soles' },
    { id: 2, nombre: '3 Meses - 250 Soles' },
    { id: 4, nombre: '6 Meses - 420 Soles' }
    // Agrega más tipos de membresía aquí
  ]; // Para guardar los tipos de membresía

  constructor(
    private miembroService: MiembroService,
    private membresiaService: MembresiaService, // Asegúrate de inyectar el servicio de membresía
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Convierte el ID a número
    this.miembroService.getMiembroById(id).subscribe(data => {
      this.miembro = data;
    });

    this.membresiaService.getAllMembresias().subscribe(data => {
      this.tiposMembresia = data;
    });
  }

  onSubmit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Convierte el ID a número
    this.miembroService.updateMiembro(id, this.miembro).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}



