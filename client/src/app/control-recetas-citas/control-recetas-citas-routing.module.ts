import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlRecetasCitasComponent } from './control-recetas-citas.component';

const routes: Routes = [
  { path: 'control-recetas-citas', component: ControlRecetasCitasComponent },
  { path: '', redirectTo: '/control-recetas-citas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlRecetasCitasRoutingModule { }
