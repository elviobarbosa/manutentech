import { Injectable, OnInit, signal, Signal } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CadastroClienteFormService implements OnInit {
 
  private _cadastroCliente = new FormGroup({
    responsavel: new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      ativo: new FormControl(true, [Validators.required]),
      profissao: new FormControl(''),
      logradouro: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      complemento: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      telefone_celular: new FormControl('', [Validators.required]),
      telefone_adicional: new FormControl(''),
      genero: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl('', [Validators.required])
    }),
    pacientes: new FormGroup({}, [Validators.required]),
    responsavelFinanceiro: new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      telefone_celular: new FormControl('', [Validators.required]),
      telefone_adicional: new FormControl('')
    }),
    cobranca: new FormControl('', [Validators.required])
  })

  // public formResponsavel = signal<FormGroup>(this._cadastroCliente.get('responsavel') as FormGroup) ;

  get formCadastroCliente(): FormGroup {
    return this._cadastroCliente as FormGroup
  }

  get formResponsavel(): FormGroup {
    return this._cadastroCliente.get('responsavel') as FormGroup
  }

  get formPacientes(): FormGroup {
    return this._cadastroCliente.get('pacientes') as FormGroup
  }

  get formResponsavelFinanceiro(): FormGroup {
    return this._cadastroCliente.get('responsavelFinanceiro') as FormGroup
  }

  ngOnInit(): void {
    //console.log(this.formResponsavel)
  }


}
