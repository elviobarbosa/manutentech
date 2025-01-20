import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'login',
      loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
      path: 'register',
      loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
    },
    {
      path: 'reset-password',
      loadComponent: () => import('./features/auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
    },
    {
      path: 'forgot-password',
      loadComponent: () => import('./features/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
    },
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }
  ];
