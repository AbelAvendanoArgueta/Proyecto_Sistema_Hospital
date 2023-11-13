import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { IngresoComponent } from './ingreso/ingreso.component';

const routes: Routes = [
  { path: 'ingreso', component: IngresoComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: '', redirectTo: '/ingreso', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
