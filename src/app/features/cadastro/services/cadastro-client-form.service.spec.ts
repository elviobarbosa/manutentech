import { TestBed } from '@angular/core/testing';

import { CadastroClienteFormService } from './cadastro-cliente-form.service';

describe('CadastroClienteFormService', () => {
  let service: CadastroClienteFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroClienteFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
