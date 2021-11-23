import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { WebMethodsComponent } from './webmethods.component';
import {WebMethodsDetailComponent} from "./webmethods-detail/webmethods-detail.component";
import {WebMethodsAddComponent} from "./webmethods-add/webmethods-add.component";
import {WebMethodsEditComponent} from "./webmethods-edit/webmethods-edit.component";
import {WebMethodsSearchComponent} from "./webmethods-search/webmethods-search.component";

const webMethodsRoutes: Routes = [

    { path: config['webMethods'].component.name.toLowerCase() , component: WebMethodsComponent, pathMatch: 'full' },
    { path: config['webMethods'].component.name.toLowerCase()  + '/:id', component: WebMethodsDetailComponent},
    { path: config['webMethods'].component.name.toLowerCase()  + 'add', component: WebMethodsAddComponent},
    { path: config['webMethods'].component.name.toLowerCase() + 'edit/:id', component: WebMethodsEditComponent},
	{ path: config['webMethods'].component.name.toLowerCase() + 'search', component: WebMethodsSearchComponent}
];

export const webMethodsRouting = RouterModule.forChild(webMethodsRoutes);
