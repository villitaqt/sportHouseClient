import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ListarMiembrosComponent } from './components/listar-miembros/listar-miembros.component';
import { CrearMiembroComponent } from './components/crear-miembro/crear-miembro.component';
import { EditarMiembroComponent } from './components/editar-miembro/editar-miembro.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { CrearTipoMembresiaComponent } from './components/crear-tipo-membresia/crear-tipo-membresia.component';
import { ListarTiposMembresiaComponent } from './components/listar-tipos-membresia/listar-tipos-membresia.component';



@NgModule({
  declarations: [
    AppComponent,
    ListarMiembrosComponent,
    CrearMiembroComponent,
    EditarMiembroComponent,
    ConfirmDialogComponent,
    CrearTipoMembresiaComponent,
    ListarTiposMembresiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
