import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { UsersComponent } from './users.component';
import {UsersDetailComponent} from "./users-detail/users-detail.component";
import {UsersAddComponent} from "./users-add/users-add.component";
import {UsersEditComponent} from "./users-edit/users-edit.component";
import {UsersSearchComponent} from "./users-search/users-search.component";

const usersRoutes: Routes = [

    { path: config['users'].component.name.toLowerCase() , component: UsersComponent, pathMatch: 'full' },
    { path: config['users'].component.name.toLowerCase()  + '/:id', component: UsersDetailComponent},
    { path: config['users'].component.name.toLowerCase()  + 'add', component: UsersAddComponent},
    { path: config['users'].component.name.toLowerCase() + 'edit/:id', component: UsersEditComponent},
	{ path: config['users'].component.name.toLowerCase() + 'search', component: UsersSearchComponent}
];

export const usersRouting = RouterModule.forChild(usersRoutes);
