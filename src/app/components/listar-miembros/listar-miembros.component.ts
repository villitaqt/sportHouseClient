import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MiembroService } from '../../services/miembro.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-listar-miembros',
  templateUrl: './listar-miembros.component.html',
  styleUrls: ['./listar-miembros.component.css']
})
export class ListarMiembrosComponent implements OnInit {
  miembros: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ['nombre', 'dni', 'tipoMembresia', 'acciones'];

  constructor(private miembroService: MiembroService, private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {this.loadMiembros();}

  ngOnInit(): void {
    this.miembroService.getMiembros().subscribe(data => {
      this.miembros.data = data;
    });
  }

  editMiembro(id: number): void {
    this.router.navigate([`/editar/${id}`]);
  }

  loadMiembros() {
    this.miembroService.getMiembros().subscribe(data => {
      this.miembros = data;
    });
  }

  confirmDelete(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { id: id, message: '¿Estás seguro de que deseas eliminar este miembro?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.deleteMiembro(id);
      }
    });
  }

  deleteMiembro(id: number) {
    this.miembroService.deleteMiembro(id).subscribe(() => {
      this.snackBar.open('Miembro eliminado con éxito', 'Cerrar', {
        duration: 2000,
      });
      this.loadMiembros();
    });
  }
}


