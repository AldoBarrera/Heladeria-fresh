import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { FieldsComponent } from './fields.component';
import {FieldsDetailComponent} from "./fields-detail/fields-detail.component";
import {FieldsAddComponent} from "./fields-add/fields-add.component";
import {FieldsEditComponent} from "./fields-edit/fields-edit.component";
import {FieldsSearchComponent} from "./fields-search/fields-search.component";

const fieldsRoutes: Routes = [

    { path: config['fields'].component.name.toLowerCase() , component: FieldsComponent, pathMatch: 'full' },
    { path: config['fields'].component.name.toLowerCase()  + '/:id', component: FieldsDetailComponent},
    { path: config['fields'].component.name.toLowerCase()  + 'add', component: FieldsAddComponent},
    { path: config['fields'].component.name.toLowerCase() + 'edit/:id', component: FieldsEditComponent},
	{ path: config['fields'].component.name.toLowerCase() + 'search', component: FieldsSearchComponent}
];

export const fieldsRouting = RouterModule.forChild(fieldsRoutes);
