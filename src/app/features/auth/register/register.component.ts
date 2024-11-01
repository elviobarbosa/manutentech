import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { SupabaseService } from '../../../shared/services/supabase.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email = '';
  password = '';
  loading = false;

  constructor(
    private supabase: SupabaseService,
    private router: Router,
    private messageService: MessageService
  ) {}

  async signUp() {
    try {
      this.loading = true;
      await this.supabase.signUp(this.email, this.password);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Please check your email to confirm your registration'
      });
      this.router.navigate(['/login']);
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
