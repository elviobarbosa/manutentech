import { Component, inject, Inject, OnInit, signal } from '@angular/core';
import { CadastroClienteDadosResponsavelComponent } from "../components/cadastro-cliente-dados-responsavel/cadastro-cliente-dados-responsavel.component";
import { CadastroClienteFormService } from '../services/cadastro-cliente-form.service';
import { FormGroup } from '@angular/forms';
import { CadastroClienteDadosPacientesComponent } from "../components/cadastro-cliente-dados-pacientes/cadastro-cliente-dados-pacientes.component";
import { CadastroClienteResponsavelFinanceiroComponent } from "../components/cadastro-cliente-responsavel-financeiro/cadastro-cliente-responsavel-financeiro.component";

@Component({
    selector: 'app-cadastro-cliente',
    standalone: true,
    imports: [
    CadastroClienteDadosResponsavelComponent,
    CadastroClienteDadosPacientesComponent,
    CadastroClienteResponsavelFinanceiroComponent
],
    templateUrl: './cadastro-cliente.component.html',
    styleUrl: './cadastro-cliente.component.scss'
})
export class CadastroClienteComponent implements OnInit {
    private _formService = inject(CadastroClienteFormService);
    private _repetirResposavel: boolean = false;

    public form = this._formService.formCadastroCliente;
    public formResponsavel = this._formService.formResponsavel;
    public formPacientes = this._formService.formPacientes;
    public formResponsavelFinanceiro = this._formService.formResponsavelFinanceiro;
    public repetirControl$ = this._formService.repetirControlChanges$;

   ngOnInit(): void {
       this.repetirControl$.subscribe((value) => {
        this._repetirResposavel = value;
        this._setRepetirResponsavel(this.formResponsavel.value)
       })

       this.formResponsavel.valueChanges.subscribe(values => {
        this._setRepetirResponsavel(values);
       })
   }

   private _setRepetirResponsavel(values: any)  {
    if (this._repetirResposavel) {
        this.formResponsavelFinanceiro.patchValue({
            ...values
        })
    }
   }

}
