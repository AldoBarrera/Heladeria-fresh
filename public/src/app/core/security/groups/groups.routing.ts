import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { GroupsComponent } from './groups.component';
import {GroupsDetailComponent} from "./groups-detail/groups-detail.component";
import {GroupsAddComponent} from "./groups-add/groups-add.component";
import {GroupsEditComponent} from "./groups-edit/groups-edit.component";
import {GroupsSearchComponent} from "./groups-search/groups-search.component";

const groupsRoutes: Routes = [

    { path: config['groups'].component.name.toLowerCase() , component: GroupsComponent, pathMatch: 'full' },
    { path: config['groups'].component.name.toLowerCase()  + '/:id', component: GroupsDetailComponent},
    { path: config['groups'].component.name.toLowerCase()  + 'add', component: GroupsAddComponent},
    { path: config['groups'].component.name.toLowerCase() + 'edit/:id', component: GroupsEditComponent},
	{ path: config['groups'].component.name.toLowerCase() + 'search', component: GroupsSearchComponent}
];

export const groupsRouting = RouterModule.forChild(groupsRoutes);
