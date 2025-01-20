import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SupabaseService } from '../../../shared/services/supabase.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { TEXTS } from '../../../shared/config/texts.config';
@Component({
    selector: 'app-reset-password',
    imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatDividerModule,
      HttpClientModule
    ],
    standalone: true,
    templateUrl: './reset-password.component.html',
    styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  public texts = TEXTS;
  email = '';
  loading = false;

  constructor(
    private supabase: SupabaseService,

  ) {}

  async resetPassword() {
    // try {
    //   this.loading = true;
    //   await this.supabase.resetPassword(this.email);
    //   this.messageService.add({
    //     severity: 'success',
    //     summary: 'Success',
    //     detail: 'Password reset instructions have been sent to your email'
    //   });
    // } catch (error: any) {
    //   this.messageService.add({
    //     severity: 'error',
    //     summary: 'Error',
    //     detail: error.message
    //   });
    // } finally {
    //   this.loading = false;
    // }
  }
}
