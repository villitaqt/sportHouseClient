import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMiembrosComponent } from './components/listar-miembros/listar-miembros.component';
import { CrearMiembroComponent } from './components/crear-miembro/crear-miembro.component';
import { EditarMiembroComponent } from './components/editar-miembro/editar-miembro.component';
import { CrearTipoMembresiaComponent } from './components/crear-tipo-membresia/crear-tipo-membresia.component';
import { ListarTiposMembresiaComponent } from './components/listar-tipos-membresia/listar-tipos-membresia.component';

const routes: Routes = [
  { path: '', component: ListarMiembrosComponent },
  { path: 'crear', component: CrearMiembroComponent },
  { path: 'editar/:id', component: EditarMiembroComponent },
  { path: 'crear-tipo-membresia', component: CrearTipoMembresiaComponent},
  { path: 'listar-tipos-membresia', component: ListarTiposMembresiaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

