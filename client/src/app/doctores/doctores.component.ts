import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent {
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

  irAMedicamentos() {
    this.router.navigate(['/medicamentos']);
  }

  irAPacientes() {
    this.router.navigate(['/paciente']);
  }
}
