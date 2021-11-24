import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { InventoryComponent } from './inventory.component';
import {InventoryDetailComponent} from "./inventory-detail/inventory-detail.component";
import {InventoryAddComponent} from "./inventory-add/inventory-add.component";
import {InventoryEditComponent} from "./inventory-edit/inventory-edit.component";
import {InventorySearchComponent} from "./inventory-search/inventory-search.component";

const inventoryRoutes: Routes = [

    { path: config['inventory'].component.name.toLowerCase() , component: InventoryComponent, pathMatch: 'full' },
    { path: config['inventory'].component.name.toLowerCase()  + '/:id', component: InventoryDetailComponent},
    { path: config['inventory'].component.name.toLowerCase()  + 'add', component: InventoryAddComponent},
    { path: config['inventory'].component.name.toLowerCase() + 'edit/:id', component: InventoryEditComponent},
	{ path: config['inventory'].component.name.toLowerCase() + 'search', component: InventorySearchComponent}
];

export const inventoryRouting = RouterModule.forChild(inventoryRoutes);
