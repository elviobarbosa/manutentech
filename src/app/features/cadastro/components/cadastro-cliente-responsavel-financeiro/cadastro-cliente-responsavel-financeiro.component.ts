import { JsonPipe, NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { GENERO_SELECT } from '../../../../shared/config/texts.config';

@Component({
  selector: 'app-cadastro-cliente-responsavel-financeiro',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './cadastro-cliente-responsavel-financeiro.component.html',
  styleUrl: './cadastro-cliente-responsavel-financeiro.component.scss',
  standalone: true
})
export class CadastroClienteResponsavelFinanceiroComponent {
  form = input<FormGroup>(new FormGroup({}));
  public generos = GENERO_SELECT;  

}
