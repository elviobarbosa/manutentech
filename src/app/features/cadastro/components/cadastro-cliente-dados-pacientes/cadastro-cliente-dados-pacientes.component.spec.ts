import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroClienteDadosPacientesComponent } from './cadastro-cliente-dados-pacientes.component';

describe('CadastroClienteDadosPacientesComponent', () => {
  let component: CadastroClienteDadosPacientesComponent;
  let fixture: ComponentFixture<CadastroClienteDadosPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroClienteDadosPacientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroClienteDadosPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
