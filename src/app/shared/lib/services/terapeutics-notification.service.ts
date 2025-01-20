import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TerapeuticsSnackbarComponent } from '../components/terapeutics-snackbar/terapeutics-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class TerapeuticsNotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess = (message: string): void => {
    this._show(message, 'success');
  }

  showWarning = (message: string): void => {
    this._show(message, 'warning');
  }

  showAlert = (message: string):void => {
    this._show(message, 'alert');
  }

  private _show(message: string, type: 'success' | 'warning' | 'alert'): void {
    this.snackBar.openFromComponent(TerapeuticsSnackbarComponent, {
      data: { message, type },
      duration: 500000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      
    });
  }
}
