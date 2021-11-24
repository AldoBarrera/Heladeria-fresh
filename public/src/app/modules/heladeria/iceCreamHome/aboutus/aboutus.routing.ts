import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { AboutusComponent } from './aboutus.component';


const aboutusRoutes: Routes = [

    { path: 'aboutus' , component: AboutusComponent, pathMatch: 'full' },
];

export const aboutusRouting = RouterModule.forChild(aboutusRoutes);
