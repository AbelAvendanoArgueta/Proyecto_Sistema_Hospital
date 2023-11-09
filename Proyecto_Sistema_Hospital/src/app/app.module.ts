import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { PacienteComponent } from './paciente/paciente.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { DoctoresComponent } from './doctores/doctores.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { ControlRecetasCitasComponent } from './control-recetas-citas/control-recetas-citas.component';
import { ControlExamenesMedicosComponent } from './control-examenes-medicos/control-examenes-medicos.component';
import { IngresoModule } from './ingreso/ingreso.module';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    PacienteComponent,
    MenuPrincipalComponent,
    DoctoresComponent,
    MedicamentosComponent,
    ControlRecetasCitasComponent,
    ControlExamenesMedicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IngresoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
