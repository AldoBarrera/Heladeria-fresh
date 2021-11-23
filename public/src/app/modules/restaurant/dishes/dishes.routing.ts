import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { DishesComponent } from './dishes.component';
import {DishesDetailComponent} from "./dishes-detail/dishes-detail.component";
import {DishesAddComponent} from "./dishes-add/dishes-add.component";
import {DishesEditComponent} from "./dishes-edit/dishes-edit.component";
import {DishesSearchComponent} from "./dishes-search/dishes-search.component";

const dishesRoutes: Routes = [

    { path: config['dishes'].component.name.toLowerCase() , component: DishesComponent, pathMatch: 'full' },
    { path: config['dishes'].component.name.toLowerCase()  + '/:id', component: DishesDetailComponent},
    { path: config['dishes'].component.name.toLowerCase()  + 'add', component: DishesAddComponent},
    { path: config['dishes'].component.name.toLowerCase() + 'edit/:id', component: DishesEditComponent},
	{ path: config['dishes'].component.name.toLowerCase() + 'search', component: DishesSearchComponent}
];

export const dishesRouting = RouterModule.forChild(dishesRoutes);
