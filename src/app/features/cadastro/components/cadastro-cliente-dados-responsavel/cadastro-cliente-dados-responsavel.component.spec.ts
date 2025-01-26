import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroClienteDadosResponsavelComponent } from './cadastro-cliente-dados-responsavel.component';

describe('CadastroClienteDadosResponsavelComponent', () => {
  let component: CadastroClienteDadosResponsavelComponent;
  let fixture: ComponentFixture<CadastroClienteDadosResponsavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroClienteDadosResponsavelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroClienteDadosResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
