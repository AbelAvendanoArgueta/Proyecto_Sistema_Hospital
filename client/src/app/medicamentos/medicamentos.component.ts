import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent {
  constructor(private router: Router) {}

  irAMenuPrincipal() {
    this.router.navigate(['/menu-principal']);
  }

  irAControlRecetas() {
    this.router.navigate(['/control-recetas-citas']);
  }

  irAControlExamenes() {
    this.router.navigate(['/control-examenes-medicos']);
  }

  irADoctores() {
    this.router.navigate(['/doctores']);
  }

  irAPacientes() {
    this.router.navigate(['/paciente']);
  }
}
