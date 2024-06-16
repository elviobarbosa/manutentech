import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { 
        path: 'cadastro', 
        loadComponent: () =>
            import(
              "./register/register.component"
            ).then((c) => c.RegisterComponent),
    }
];


