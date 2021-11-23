import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { OrderDetailsComponent } from './orderdetails.component';
import {OrderDetailsDetailComponent} from "./orderdetails-detail/orderdetails-detail.component";
import {OrderDetailsAddComponent} from "./orderdetails-add/orderdetails-add.component";
import {OrderDetailsEditComponent} from "./orderdetails-edit/orderdetails-edit.component";
import {OrderDetailsSearchComponent} from "./orderdetails-search/orderdetails-search.component";

const orderDetailsRoutes: Routes = [

    { path: config['orderDetails'].component.name.toLowerCase() , component: OrderDetailsComponent, pathMatch: 'full' },
    { path: config['orderDetails'].component.name.toLowerCase()  + '/:id', component: OrderDetailsDetailComponent},
    { path: config['orderDetails'].component.name.toLowerCase()  + 'add', component: OrderDetailsAddComponent},
    { path: config['orderDetails'].component.name.toLowerCase() + 'edit/:id', component: OrderDetailsEditComponent},
	{ path: config['orderDetails'].component.name.toLowerCase() + 'search', component: OrderDetailsSearchComponent}
];

export const orderDetailsRouting = RouterModule.forChild(orderDetailsRoutes);
