import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TEXTS } from '../../../shared/config/texts.config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { SupabaseService } from '../../../shared/services/supabase.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TerapeuticsNotificationService } from '../../../shared/lib/services/terapeutics-notification.service';

@Component({
    selector: 'app-forgot-password',
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
    providers: [
      HttpClient
    ],
    templateUrl: './forgot-password.component.html',
    styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  private readonly _supabase = inject(SupabaseService);
  private readonly _snackBar = inject(MatSnackBar);
  private readonly _alertSuccess = inject(TerapeuticsNotificationService).showSuccess;
  private readonly _alertError = inject(TerapeuticsNotificationService).showAlert;
  // private readonly _supabaseClient = inject(SupabaseClient);

  public texts = TEXTS;
  email = '';
  loading = false;

  // async resetPassword(email: string): Promise<{ error: any }> {
  //   const { error } = await this._supabase.auth.resetPasswordForEmail(email, {
  //     redirectTo: `${environment.URL_BASE}/reset-password`,
  //   });
  //   return { error };
  // }

  async resetPassword() {
    this.loading = true;
    const { error } = await this._supabase.sendPasswordToEmail(this.email);
    this.loading = false;

    if (error) {
      this._alertError('O email não existe.')
    } else {
      this._alertSuccess('E-mail de recuperação enviado com sucesso!')
    }
    // const errorMessage =(error) ? 'O email não existe.' : 'E-mail de recuperação enviado com sucesso!';

    // this._snackBar.open(errorMessage, 'Fechar', {
    //   duration: 5000,

    //   horizontalPosition: 'center',
    //   verticalPosition: 'bottom'
    // });
  }
  //async resetPassword() {
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
//}

