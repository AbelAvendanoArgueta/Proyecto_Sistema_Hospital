import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-examenes-medicos',
  templateUrl: './control-examenes-medicos.component.html',
  styleUrls: ['./control-examenes-medicos.component.css']
})
export class ControlExamenesMedicosComponent {
  constructor(private router: Router) {}

  irAMenuPrincipal() {
    this.router.navigate(['/menu-principal']);
}

irAControlRecetas() {
  this.router.navigate(['/control-recetas-citas']);
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