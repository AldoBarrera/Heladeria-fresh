import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { GrupApisPrivileguesComponent } from './grupapisprivilegues.component';
import {GrupApisPrivileguesDetailComponent} from "./grupapisprivilegues-detail/grupapisprivilegues-detail.component";
import {GrupApisPrivileguesAddComponent} from "./grupapisprivilegues-add/grupapisprivilegues-add.component";
import {GrupApisPrivileguesEditComponent} from "./grupapisprivilegues-edit/grupapisprivilegues-edit.component";
import {GrupApisPrivileguesSearchComponent} from "./grupapisprivilegues-search/grupapisprivilegues-search.component";

const grupApisPrivileguesRoutes: Routes = [

    { path: config['grupApisPrivilegues'].component.name.toLowerCase() , component: GrupApisPrivileguesComponent, pathMatch: 'full' },
    { path: config['grupApisPrivilegues'].component.name.toLowerCase()  + '/:id', component: GrupApisPrivileguesDetailComponent},
    { path: config['grupApisPrivilegues'].component.name.toLowerCase()  + 'add', component: GrupApisPrivileguesAddComponent},
    { path: config['grupApisPrivilegues'].component.name.toLowerCase() + 'edit/:id', component: GrupApisPrivileguesEditComponent},
	{ path: config['grupApisPrivilegues'].component.name.toLowerCase() + 'search', component: GrupApisPrivileguesSearchComponent}
];

export const grupApisPrivileguesRouting = RouterModule.forChild(grupApisPrivileguesRoutes);
