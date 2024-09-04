import { Component, OnInit } from '@angular/core';
import { TipoMembresiaService } from '../../services/tipo-membresia.service';

@Component({
  selector: 'app-listar-tipos-membresia',
  templateUrl: './listar-tipos-membresia.component.html',
  styleUrls: ['./listar-tipos-membresia.component.css']
})
export class ListarTiposMembresiaComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'precio', 'meses', 'acciones'];

  tiposMembresia: any[] = [];

  constructor(private tipoMembresiaService: TipoMembresiaService) { }

  ngOnInit(): void {
    this.loadTiposMembresia();
  }

  loadTiposMembresia(): void {
    this.tipoMembresiaService.getTiposMembresia().subscribe(data => {
      this.tiposMembresia = data;
    });
  }

  deleteTipoMembresia(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este tipo de membresía?')) {
      this.tipoMembresiaService.deleteTipoMembresia(id).subscribe(() => {
        this.loadTiposMembresia(); // Recargar la lista después de eliminar
      });
    }
  }
}

