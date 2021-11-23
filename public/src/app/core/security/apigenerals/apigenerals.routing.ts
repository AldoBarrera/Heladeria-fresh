import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { ApiGeneralsComponent } from './apigenerals.component';
import {ApiGeneralsDetailComponent} from "./apigenerals-detail/apigenerals-detail.component";
import {ApiGeneralsAddComponent} from "./apigenerals-add/apigenerals-add.component";
import {ApiGeneralsEditComponent} from "./apigenerals-edit/apigenerals-edit.component";
import {ApiGeneralsSearchComponent} from "./apigenerals-search/apigenerals-search.component";

const apiGeneralsRoutes: Routes = [

    { path: config['apiGenerals'].component.name.toLowerCase() , component: ApiGeneralsComponent, pathMatch: 'full' },
    { path: config['apiGenerals'].component.name.toLowerCase()  + '/:id', component: ApiGeneralsDetailComponent},
    { path: config['apiGenerals'].component.name.toLowerCase()  + 'add', component: ApiGeneralsAddComponent},
    { path: config['apiGenerals'].component.name.toLowerCase() + 'edit/:id', component: ApiGeneralsEditComponent},
	{ path: config['apiGenerals'].component.name.toLowerCase() + 'search', component: ApiGeneralsSearchComponent}
];

export const apiGeneralsRouting = RouterModule.forChild(apiGeneralsRoutes);
