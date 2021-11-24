import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { DishesPublicComponent } from './dishespublic.component';


const dishesPublicRoutes: Routes = [

    { path: 'public' , component: DishesPublicComponent, pathMatch: 'full' },
];

export const dishesPublicRouting = RouterModule.forChild(dishesPublicRoutes);
