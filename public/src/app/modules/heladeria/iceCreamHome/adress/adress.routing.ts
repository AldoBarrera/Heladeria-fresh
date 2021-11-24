import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { AdressComponent } from './adress.component';


const adressRoutes: Routes = [

    { path: 'adress' , component: AdressComponent, pathMatch: 'full' },
];

export const adressRouting = RouterModule.forChild(adressRoutes);
