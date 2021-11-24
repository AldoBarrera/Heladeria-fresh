import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { ErrorloginComponent } from './errorlogin.component';


const errorloginRoutes: Routes = [

    { path: 'errorLogin' , component: ErrorloginComponent, pathMatch: 'full' },
];

export const errorloginRouting = RouterModule.forChild(errorloginRoutes);
