import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroClienteResponsavelFinanceiroComponent } from './cadastro-cliente-responsavel-financeiro.component';

describe('CadastroClienteResponsavelFinanceiroComponent', () => {
  let component: CadastroClienteResponsavelFinanceiroComponent;
  let fixture: ComponentFixture<CadastroClienteResponsavelFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroClienteResponsavelFinanceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroClienteResponsavelFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
