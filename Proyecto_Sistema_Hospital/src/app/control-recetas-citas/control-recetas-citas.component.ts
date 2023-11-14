import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-recetas-citas',
  templateUrl: './control-recetas-citas.component.html',
  styleUrls: ['./control-recetas-citas.component.css']
})
export class ControlRecetasCitasComponent {
  constructor(private router: Router) {}

  irAMenuPrincipal() {
    this.router.navigate(['/menu-principal']);
}

irAControlExamenes() {
  this.router.navigate(['/control-examenes-medicos']);
}

irADoctores() {
  this.router.navigate(['/doctores']);
}

irAMedicamentos() {
  this.router.navigate(['/medicamentos']);
}

irAPacientes() {
  this.router.navigate(['/paciente']);
}
}
