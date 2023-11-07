import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlExamenesMedicosComponent } from './control-examenes-medicos.component';

describe('ControlExamenesMedicosComponent', () => {
  let component: ControlExamenesMedicosComponent;
  let fixture: ComponentFixture<ControlExamenesMedicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlExamenesMedicosComponent]
    });
    fixture = TestBed.createComponent(ControlExamenesMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
