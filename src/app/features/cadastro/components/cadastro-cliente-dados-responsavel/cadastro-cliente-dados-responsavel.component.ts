import { Component, input, Pipe } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { createInvalidFieldHelper } from '../../../../shared/lib/helpers/invalid-field.helper';
import { JsonPipe, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { GENERO_SELECT } from '../../../../shared/config/texts.config';

@Component({
  selector: 'app-cadastro-cliente-dados-responsavel',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    NgIf
  ],
  templateUrl: './cadastro-cliente-dados-responsavel.component.html',
  styleUrl: './cadastro-cliente-dados-responsavel.component.scss',
  providers: [
    provideNativeDateAdapter()],
})
export class CadastroClienteDadosResponsavelComponent {

  form = input<FormGroup>(new FormGroup({}));
  
  public invalidField = createInvalidFieldHelper(this.form());
  public generos = GENERO_SELECT;

  public hasFormControls(formGroup: FormGroup): boolean {
    return Object.keys(formGroup.controls).length > 0;
  }
   

}
