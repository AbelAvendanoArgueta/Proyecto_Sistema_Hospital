import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuPrincipalComponent } from './menu-principal.component';

const routes: Routes = [
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: '', redirectTo: '/menu-principal', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPrincipalRoutingModule { }
