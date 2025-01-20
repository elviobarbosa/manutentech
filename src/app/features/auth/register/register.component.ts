import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SupabaseService } from '../../../shared/services/supabase.service';


@Component({
    selector: 'app-register',
    imports: [
      CommonModule,
      FormsModule,
      RouterModule,
    ],
    standalone: true,
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
  ) {}

  async signUp() {
    // try {
    //   this.loading = true;
    //   await this.supabase.signUp(this.email, this.password);
    //   this.messageService.add({
    //     severity: 'success',
    //     summary: 'Success',
    //     detail: 'Please check your email to confirm your registration'
    //   });
    //   this.router.navigate(['/login']);
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
