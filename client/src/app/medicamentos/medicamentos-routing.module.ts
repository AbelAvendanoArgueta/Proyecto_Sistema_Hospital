import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentosComponent } from './medicamentos.component';


const routes: Routes = [
  { path: 'medicamentos', component: MedicamentosComponent },
  { path: '', redirectTo: '/medicamentos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
