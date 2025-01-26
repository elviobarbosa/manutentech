import { Component, Inject, input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CadastroClienteFormService } from '../../services/cadastro-cliente-form.service';
import { GENERO_SELECT } from '../../../../shared/config/texts.config';
import { JsonPipe, NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-cadastro-cliente-dados-pacientes',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgFor,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './cadastro-cliente-dados-pacientes.component.html',
  styleUrl: './cadastro-cliente-dados-pacientes.component.scss'
})
export class CadastroClienteDadosPacientesComponent {
  form = input<FormGroup>(new FormGroup([]));

  public pacientesForm: FormArray<FormGroup<{
    nome: FormControl<string | null>;
    parentesco: FormControl<string | null>;
    nascimento: FormControl<string | null>;
    genero: FormControl<string | null>;
  }>> = new FormArray<FormGroup<{
    nome: FormControl<string | null>;
    parentesco: FormControl<string | null>;
    nascimento: FormControl<string | null>;
    genero: FormControl<string | null>;
  }>>([]);

  public generos = GENERO_SELECT;

  addPaciente() {
    const pacienteGroup = new FormGroup<{
      nome: FormControl<string | null>;
      parentesco: FormControl<string | null>;
      nascimento: FormControl<string | null>;
      genero: FormControl<string | null>;
    }>({
      nome: new FormControl('', [Validators.required]),
      parentesco: new FormControl('', [Validators.required]),
      nascimento: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
    });

    this.pacientesForm.push(pacienteGroup);
  }

  removePaciente(index: number) {
    this.pacientesForm.removeAt(index);
  }

}
