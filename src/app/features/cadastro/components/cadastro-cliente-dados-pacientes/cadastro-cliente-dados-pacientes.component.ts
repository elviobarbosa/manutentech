import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CadastroClienteFormService } from '../../services/cadastro-cliente-form.service';

@Component({
  selector: 'app-cadastro-cliente-dados-pacientes',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  templateUrl: './cadastro-cliente-dados-pacientes.component.html',
  styleUrl: './cadastro-cliente-dados-pacientes.component.scss'
})
export class CadastroClienteDadosPacientesComponent {

  public form = Inject(CadastroClienteFormService).responsavel;

}
