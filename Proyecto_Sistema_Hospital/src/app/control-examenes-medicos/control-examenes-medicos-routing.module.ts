import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlExamenesMedicosComponent } from './control-examenes-medicos.component';

const routes: Routes = [
  { path: 'control-examenes-medicos', component: ControlExamenesMedicosComponent },
  { path: '', redirectTo: '/control-examenes-medicos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlExamenesMedicosRoutingModule { }
