import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { ApiSpecificsComponent } from './apispecifics.component';
import {ApiSpecificsDetailComponent} from "./apispecifics-detail/apispecifics-detail.component";
import {ApiSpecificsAddComponent} from "./apispecifics-add/apispecifics-add.component";
import {ApiSpecificsEditComponent} from "./apispecifics-edit/apispecifics-edit.component";
import {ApiSpecificsSearchComponent} from "./apispecifics-search/apispecifics-search.component";

const apiSpecificsRoutes: Routes = [

    { path: config['apiSpecifics'].component.name.toLowerCase() , component: ApiSpecificsComponent, pathMatch: 'full' },
    { path: config['apiSpecifics'].component.name.toLowerCase()  + '/:id', component: ApiSpecificsDetailComponent},
    { path: config['apiSpecifics'].component.name.toLowerCase()  + 'add', component: ApiSpecificsAddComponent},
    { path: config['apiSpecifics'].component.name.toLowerCase() + 'edit/:id', component: ApiSpecificsEditComponent},
	{ path: config['apiSpecifics'].component.name.toLowerCase() + 'search', component: ApiSpecificsSearchComponent}
];

export const apiSpecificsRouting = RouterModule.forChild(apiSpecificsRoutes);
