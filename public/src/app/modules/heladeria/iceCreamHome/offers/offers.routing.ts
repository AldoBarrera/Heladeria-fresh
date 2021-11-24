import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { OffersComponent } from './offers.component';


const offersRoutes: Routes = [

    { path: 'offers' , component: OffersComponent, pathMatch: 'full' },
];

export const offersRouting = RouterModule.forChild(offersRoutes);
