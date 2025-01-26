import { Component, inject, Inject, signal } from '@angular/core';
import { CadastroClienteDadosResponsavelComponent } from "../components/cadastro-cliente-dados-responsavel/cadastro-cliente-dados-responsavel.component";
import { CadastroClienteFormService } from '../services/cadastro-cliente-form.service';
import { FormGroup } from '@angular/forms';
import { CadastroClienteDadosPacientesComponent } from "../components/cadastro-cliente-dados-pacientes/cadastro-cliente-dados-pacientes.component";

@Component({
    selector: 'app-cadastro-cliente',
    imports: [
    CadastroClienteDadosResponsavelComponent,
    CadastroClienteDadosPacientesComponent
],
    templateUrl: './cadastro-cliente.component.html',
    styleUrl: './cadastro-cliente.component.scss'
})
export class CadastroClienteComponent {
    private _formService = inject(CadastroClienteFormService);

    public form = this._formService.formCadastroCliente;
    public formResponsavel = this._formService.formResponsavel;
    public formPacientes = this._formService.formPacientes;
    public formResponsavelFinanceiro = this._formService.formResponsavelFinanceiro;

    ngOnInit(): void {
     console.log(`'vopo`)
      console.log(this.formResponsavel)
    }
}
