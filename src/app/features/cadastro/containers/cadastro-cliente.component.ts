import { Component, inject, Inject, signal } from '@angular/core';
import { CadastroClienteDadosResponsavelComponent } from "../components/cadastro-cliente-dados-responsavel/cadastro-cliente-dados-responsavel.component";
import { CadastroClienteFormService } from '../services/cadastro-cliente-form.service';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-cadastro-cliente',
    imports: [
        CadastroClienteDadosResponsavelComponent
    ],
    templateUrl: './cadastro-cliente.component.html',
    styleUrl: './cadastro-cliente.component.scss'
})
export class CadastroClienteComponent {
    private _formService = inject(CadastroClienteFormService);

    public formResponsavel = this._formService.formResponsavel;

    ngOnInit(): void {
     console.log(`'vopo`)
      console.log(this.formResponsavel)
    }
}
