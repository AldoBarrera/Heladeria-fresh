import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { LoginComponent } from './login.component';


const loginRoutes: Routes = [

    { path: 'login' , component: LoginComponent, pathMatch: 'full' },
];

export const loginRouting = RouterModule.forChild(loginRoutes);
