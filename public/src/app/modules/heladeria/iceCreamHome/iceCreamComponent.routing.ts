import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { IceCreamComponent } from './iceCream.component';


const iceCreamHomeRoutes: Routes = [

    { path: 'home' , component: IceCreamComponent, pathMatch: 'full' },
];

export const iceCreamHomeRouting = RouterModule.forChild(iceCreamHomeRoutes);
