import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent {
  constructor(private router: Router) {}

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

  irAPacientes() {
    this.router.navigate(['/paciente']);
  }
}
