import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./login.component').then(p => p.LoginComponent)
    }
];