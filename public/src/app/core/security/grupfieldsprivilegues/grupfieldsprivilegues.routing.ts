import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { GrupFieldsPrivileguesComponent } from './grupfieldsprivilegues.component';
import {GrupFieldsPrivileguesDetailComponent} from "./grupfieldsprivilegues-detail/grupfieldsprivilegues-detail.component";
import {GrupFieldsPrivileguesAddComponent} from "./grupfieldsprivilegues-add/grupfieldsprivilegues-add.component";
import {GrupFieldsPrivileguesEditComponent} from "./grupfieldsprivilegues-edit/grupfieldsprivilegues-edit.component";
import {GrupFieldsPrivileguesSearchComponent} from "./grupfieldsprivilegues-search/grupfieldsprivilegues-search.component";

const grupFieldsPrivileguesRoutes: Routes = [

    { path: config['grupFieldsPrivilegues'].component.name.toLowerCase() , component: GrupFieldsPrivileguesComponent, pathMatch: 'full' },
    { path: config['grupFieldsPrivilegues'].component.name.toLowerCase()  + '/:id', component: GrupFieldsPrivileguesDetailComponent},
    { path: config['grupFieldsPrivilegues'].component.name.toLowerCase()  + 'add', component: GrupFieldsPrivileguesAddComponent},
    { path: config['grupFieldsPrivilegues'].component.name.toLowerCase() + 'edit/:id', component: GrupFieldsPrivileguesEditComponent},
	{ path: config['grupFieldsPrivilegues'].component.name.toLowerCase() + 'search', component: GrupFieldsPrivileguesSearchComponent}
];

export const grupFieldsPrivileguesRouting = RouterModule.forChild(grupFieldsPrivileguesRoutes);
