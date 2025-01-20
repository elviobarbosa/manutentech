import { NgClass } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-terapeutics-snackbar',
  imports: [
    MatIconModule,
    NgClass,
    MatButtonModule,
    MatSnackBarLabel, 
    MatSnackBarActions, 
    MatSnackBarAction
  ],
  standalone: true,
  templateUrl: './terapeutics-snackbar.component.html',
  styleUrl: './terapeutics-snackbar.component.scss'
})
export class TerapeuticsSnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { message: string; type: 'success' | 'warning' | 'alert' }) {}

  getIcon(): string {
    switch (this.data.type) {
      case 'success':
        return 'check_circle';
      case 'warning':
        return 'warning';
      case 'alert':
        return 'error';
      default:
        return 'info';
    }
  }
}
