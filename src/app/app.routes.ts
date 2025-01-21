import { Routes } from '@angular/router';
import { CadastroComponent } from './features/cadastro/cadastro.component';

export const routes: Routes = [
    {
      path: 'login',
      loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
      path: 'register',
      loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
    },
    // {
    //   path: 'cadastro',
    //   loadComponent: () => import('./features/cadastro/cadastro.component').then(m => m.CadastroComponent)
    // },
    {
      path: 'cadastro',
      component: CadastroComponent
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
