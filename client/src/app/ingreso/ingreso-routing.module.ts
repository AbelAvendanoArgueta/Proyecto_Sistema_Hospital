import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IngresoComponent } from './ingreso.component';

const routes: Routes = [
  { path: 'ingreso', component: IngresoComponent },
  { path: '', redirectTo: '/ingreso', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class IngresoRoutingModule { }