import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./app/features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./app/features/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./app/features/auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule)
  ]
});