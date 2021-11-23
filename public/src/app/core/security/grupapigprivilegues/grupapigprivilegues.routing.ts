import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { GrupApigPrivileguesComponent } from './grupapigprivilegues.component';
import {GrupApigPrivileguesDetailComponent} from "./grupapigprivilegues-detail/grupapigprivilegues-detail.component";
import {GrupApigPrivileguesAddComponent} from "./grupapigprivilegues-add/grupapigprivilegues-add.component";
import {GrupApigPrivileguesEditComponent} from "./grupapigprivilegues-edit/grupapigprivilegues-edit.component";
import {GrupApigPrivileguesSearchComponent} from "./grupapigprivilegues-search/grupapigprivilegues-search.component";

const grupApigPrivileguesRoutes: Routes = [

    { path: config['grupApigPrivilegues'].component.name.toLowerCase() , component: GrupApigPrivileguesComponent, pathMatch: 'full' },
    { path: config['grupApigPrivilegues'].component.name.toLowerCase()  + '/:id', component: GrupApigPrivileguesDetailComponent},
    { path: config['grupApigPrivilegues'].component.name.toLowerCase()  + 'add', component: GrupApigPrivileguesAddComponent},
    { path: config['grupApigPrivilegues'].component.name.toLowerCase() + 'edit/:id', component: GrupApigPrivileguesEditComponent},
	{ path: config['grupApigPrivilegues'].component.name.toLowerCase() + 'search', component: GrupApigPrivileguesSearchComponent}
];

export const grupApigPrivileguesRouting = RouterModule.forChild(grupApigPrivileguesRoutes);
