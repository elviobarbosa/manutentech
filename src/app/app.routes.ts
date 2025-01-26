import { Routes } from '@angular/router';
import { urls } from './shared/config/urls.config';

export const routes: Routes = [
    {
      path: urls.login.slice(1),
      loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
      path: 'register',
      loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
    },
    {
      path: urls.cadClientes.slice(1),
      loadComponent: () => import('./features/cadastro/containers/cadastro-cliente.component').then(m => m.CadastroClienteComponent)
    },
    
    {
      path: 'reset-password',
      loadComponent: () => import('./features/auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
    },
    {
      path: urls.forgotPassword.slice(1),
      loadComponent: () => import('./features/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
    },
    {
      path: '',
      redirectTo: urls.login,
      pathMatch: 'full'
    }
  ];
