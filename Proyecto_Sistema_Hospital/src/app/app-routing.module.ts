import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ControlRecetasCitasComponent } from './control-recetas-citas/control-recetas-citas.component';
import { ControlExamenesMedicosComponent } from './control-examenes-medicos/control-examenes-medicos.component';
import { DoctoresComponent } from './doctores/doctores.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { PacienteComponent } from './paciente/paciente.component';

const routes: Routes = [
  { path: 'ingreso', component: IngresoComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: '', redirectTo: '/ingreso', pathMatch: 'full' },
  { path: 'control-recetas-citas', component: ControlRecetasCitasComponent },
  { path: 'control-examenes-medicos', component: ControlExamenesMedicosComponent },
  { path: 'doctores', component: DoctoresComponent },
  { path: 'medicamentos', component: MedicamentosComponent },
  { path: 'paciente', component: PacienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
