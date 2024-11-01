import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SupabaseService } from '../../../shared/services/supabase.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ToastModule  
  ],
  providers: [MessageService],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  email = '';
  loading = false;

  constructor(
    private supabase: SupabaseService,
    private messageService: MessageService
  ) {}

  async resetPassword() {
    try {
      this.loading = true;
      await this.supabase.resetPassword(this.email);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Password reset instructions have been sent to your email'
      });
    } catch (error: any) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message
      });
    } finally {
      this.loading = false;
    }
  }
}
