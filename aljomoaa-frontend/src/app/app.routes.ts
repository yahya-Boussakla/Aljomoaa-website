import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HeaderComponent,
    },
];
