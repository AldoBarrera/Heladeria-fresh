import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { OrderComponent } from './order.component';
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import {OrderAddComponent} from "./order-add/order-add.component";
import {OrderEditComponent} from "./order-edit/order-edit.component";
import {OrderSendComponent} from "./order-edit/order-send.component";
import {OrderSearchComponent} from "./order-search/order-search.component";

const orderRoutes: Routes = [

    { path: config['order'].component.name.toLowerCase() , component: OrderComponent, pathMatch: 'full' },
    { path: config['order'].component.name.toLowerCase()  + '/:id', component: OrderDetailComponent},
    { path: config['order'].component.name.toLowerCase()  + 'add', component: OrderAddComponent},
    { path: config['order'].component.name.toLowerCase() + 'edit/:id', component: OrderEditComponent},
    { path: config['order'].component.name.toLowerCase() + 'send/:id', component: OrderSendComponent},
	{ path: config['order'].component.name.toLowerCase() + 'search', component: OrderSearchComponent}
];

export const orderRouting = RouterModule.forChild(orderRoutes);
