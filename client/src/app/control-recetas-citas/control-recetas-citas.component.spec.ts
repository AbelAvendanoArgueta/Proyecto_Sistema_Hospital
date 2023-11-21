import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRecetasCitasComponent } from './control-recetas-citas.component';

describe('ControlRecetasCitasComponent', () => {
  let component: ControlRecetasCitasComponent;
  let fixture: ComponentFixture<ControlRecetasCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlRecetasCitasComponent]
    });
    fixture = TestBed.createComponent(ControlRecetasCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
