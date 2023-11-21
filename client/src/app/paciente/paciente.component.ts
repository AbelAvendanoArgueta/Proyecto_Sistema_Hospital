import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
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

  irAMedicamentos() {
    this.router.navigate(['/medicamentos']);
  }

}
