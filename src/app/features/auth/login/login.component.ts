import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { SupabaseService } from '../../../shared/services/supabase.service';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'app-login',
  standalone: true,
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
  providers: [ThemeService, HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly _supabase = inject(SupabaseService);
  private readonly _router = inject(Router);
  private readonly _snackBar = inject(MatSnackBar)
  private readonly _themeService = inject(ThemeService);
  
  email = '';
  password = '';
  loading = false;
  hidePassword = true;
  ngOnInit() {
    //this._themeService.loadTheme().subscribe(res => console.log(res));
  }
  async signIn() {
    try {
      this.loading = true;
      await this._supabase.signIn(this.email, this.password);
      this._router.navigate(['/register']);
    } catch (error: any) {
      this._snackBar.open(error.message, 'Close', {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });
    } finally {
      this.loading = false;
    }
  }
}
